import React, { useState, useEffect } from 'react';
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
          times.unshift(Math.floor(day / 10));
        } else {
          times.unshift(day % 10);
        }
        break;
      case 'h':
        if ((format[i + 1] || '').toLowerCase() === 'h') {
          times.unshift(Math.floor(hor / 10));
        } else {
          times.unshift(hor % 10);
        }
        break;
      case 'm':
        if ((format[i + 1] || '').toLowerCase() === 'm') {
          times.unshift(Math.floor(min / 10));
        } else {
          times.unshift(min % 10);
        }
        break;
      case 's':
        if ((format[i + 1] || '').toLowerCase() === 's') {
          times.unshift(Math.floor(sec / 10));
        } else {
          times.unshift(sec % 10);
        }
        break;
      default:
        times.unshift(format[i]);
    }
  }

  return {
    leftTime,
    times,
  };
};

export default function({ option: { leftSecond, format, end, style = {}, standard } }) {
  const [{ times, leftTime }, setLeftTime] = useState(getTimeText(format, leftSecond));

  useEffect(() => {
    let id;
    if (leftTime > 0) {
      id = setInterval(() => {
        setLeftTime(prevData => getTimeText(format, prevData.leftTime - 1));
      }, 1000);
    } else {
      end();
    }

    return () => clearInterval(id);
  }, [leftTime, end, format]);

  return (
    <div className={styles['count-down']} style={{ fontSize: standard }}>
      {times.map(item => (
        <Flipper now={item} style={style} />
      ))}
    </div>
  );
}
