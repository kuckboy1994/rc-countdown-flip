import React, { useState, useEffect, useRef } from 'react';
import Flipper from './Flipper';
import styles from './style.module.sass';

const getTimeText = (format, leftTime) => {
  const day = Math.floor(leftTime / (24 * 60 * 60));
  const hor = Math.floor((leftTime % (24 * 60 * 60)) / (60 * 60));
  const min = Math.floor((leftTime % (60 * 60)) / 60);
  const sec = leftTime % 60;

  const times = [];

  for (let i = format.length - 1; i >= 0; i -= 1) {
    switch (format[i].toLowerCase()) {
      case 'd':
        if ((format[i + 1] || '').toLowerCase() === 'd') {
          times.unshift({ index: i, data: Math.floor(day / 10) });
        } else {
          times.unshift({ index: i, data: day % 10 });
        }
        break;
      case 'h':
        if ((format[i + 1] || '').toLowerCase() === 'h') {
          times.unshift({ index: i, data: Math.floor(hor / 10) });
        } else {
          times.unshift({ index: i, data: hor % 10 });
        }
        break;
      case 'm':
        if ((format[i + 1] || '').toLowerCase() === 'm') {
          times.unshift({ index: i, data: Math.floor(min / 10) });
        } else {
          times.unshift({ index: i, data: min % 10 });
        }
        break;
      case 's':
        if ((format[i + 1] || '').toLowerCase() === 's') {
          times.unshift({ index: i, data: Math.floor(sec / 10) });
        } else {
          times.unshift({ index: i, data: sec % 10 });
        }
        break;
      default:
        times.unshift({ index: i, data: format[i] });
    }
  }

  return {
    leftTime,
    times,
  };
};

export default function({
  option: { leftSecond = 0, format = 'dd:hh:mm:ss', end = () => {}, style = {}, standard },
}) {
  const prevLeftSecond = useRef(leftSecond);
  const [{ times, leftTime }, setLeftTime] = useState(getTimeText(format, leftSecond));

  useEffect(() => {
    let id;
    let fn = () => {};
    if (prevLeftSecond.current !== leftSecond) {
      prevLeftSecond.current = leftSecond;
      setLeftTime(() => getTimeText(format, leftSecond));
    } else if (leftTime > 0) {
      id = setInterval(() => {
        setLeftTime(prevData => getTimeText(format, prevData.leftTime - 1));
      }, 1000);
      fn = () => clearInterval(id);
    } else {
      id = setTimeout(() => {
        end();
      }, 1000);
      fn = () => clearTimeout(id);
    }

    return fn;
  }, [leftTime, end, format, prevLeftSecond, leftSecond]);

  return (
    <div className={styles['count-down']} style={{ fontSize: standard }}>
      {times.map(item => (
        <Flipper now={item.data} index={item.index} style={style} />
      ))}
    </div>
  );
}
