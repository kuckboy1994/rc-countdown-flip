import React, { useEffect, useState, useRef } from "react";
import cn from "classnames";
import styles from "./style.css";

export default function(props) {
  const { now, style } = props;
  const prevNowRef = useRef();

  const [flip, setFlip] = useState(false);

  const [oldVal, setOldVal] = useState(0);
  const [newVal, setNewVal] = useState(0);
  const [separator, setSeparator] = useState(false);

  useEffect(() => {
    let id;
    if (typeof now === "string") {
      setSeparator(true);
      setOldVal(now);
    } else if (typeof prevNowRef.current === "undefined") {
      setOldVal(now);
    } else if (now !== prevNowRef.current) {
      setOldVal(prevNowRef.current);
      setNewVal(now);
      setFlip(true);
      id = setTimeout(() => {
        setFlip(false);
        setOldVal(now);
      }, 600);
    }
    prevNowRef.current = now;

    return () => clearTimeout(id);
  }, [now]);

  if (separator) {
    const sc = {};
    if (style && style.color) {
      sc.color = style.background;
    }

    return (
      <div className={styles.separator} style={sc}>
        {oldVal}
      </div>
    );
  } else {
    const sb = {};
    if (style && style.background) {
      sb.border = `.01em solid ${style.background}`;
      sb.background = style.background;
    }
    const sc = {};
    if (style && style.color) {
      sc.color = style.color;
    }

    return (
      <div className={styles.card} style={sc}>
        <div className={styles["b-1"]} style={sb}>
          <div className={styles["top"]}>{newVal}</div>
        </div>
        <div className={styles["b-2"]} style={sb}>
          <div className={styles["bottom"]}>{oldVal}</div>
        </div>
        <div className={cn({ [styles["f"]]: true, [styles["flip"]]: flip })}>
          <div className={styles["a-1"]} style={sb}>
            <div className={styles["hou"]}>{newVal}</div>
          </div>
          <div className={styles["a-2"]} style={sb}>
            <div className={styles["qian"]}>{oldVal}</div>
          </div>
        </div>
        <div className={styles.before} style={sb}></div>
        <div className={styles.after} style={sb}></div>
      </div>
    );
  }
}
