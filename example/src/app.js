import React, { useState } from "react";
import { render } from "react-dom";
import styles from "./style.css";
import FlipCountDown from "../../src/";

const App = () => {
  const [end, setEnd] = useState(false);
  const [leftSecond, setLeftSecond] = useState(5);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h2>normal</h2>
        <FlipCountDown
          option={{
            leftSecond: 86400 * 2 + 5,
            format: "dd:hh:mm:ss"
          }}
        />
      </div>

      <div className={styles.item}>
        <h2>callback</h2>
        <FlipCountDown
          option={{
            leftSecond,
            format: "dd:hh:mm:ss",
            end: () => {
              console.log("true");
              setEnd(true);
            }
          }}
        />
        <p>结束了吗？ {end ? "是" : "否"} </p>
        <button
          onClick={() => {
            console.log(11);
            setLeftSecond(a => a + 1);
            setEnd(false);
          }}
        >
          +1 重置
        </button>
      </div>

      <div className={styles.item}>
        <h2>style</h2>
        <FlipCountDown
          option={{
            leftSecond: 86400 * 2 + 5,
            format: "dd:hh:mm:ss",
            style: {
              color: "#47858b",
              background: "#e4f4f3"
            },
            standard: "80px"
          }}
        />
      </div>

      <div className={styles.item}>
        <h2>format ： dd天hh时mm分ss秒</h2>
        <FlipCountDown
          option={{
            leftSecond: 86400 * 2 + 5,
            format: "dd天hh时mm分ss秒"
          }}
        />
      </div>

      <div className={styles.item}>
        <h2>format ： HH:mm:ss</h2>
        <FlipCountDown
          option={{
            leftSecond: 86400 * 2 + 5,
            format: "HH:mm:ss"
          }}
        />
      </div>
    </div>
  );
};

render(<App />, document.getElementById("root"));
