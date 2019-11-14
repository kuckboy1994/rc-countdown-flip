<h1 align="center">
rc-countdown-flip
</h1>

## Install

```bash
yarn add rc-countdown-flip
```

## Basic Usage

```jsx
import FlipCountDown from "rc-countdown-flip";

<FlipCountDown
  option={{
    leftSecond: 100,
    format: "hh:mm:ss",
    end: () => {
      alert("end");
    }
    style: {
      color: "black",
      background: "white"
    },
    standard: "50px"
  }}
/>;
```

## Attribute

| name       | 含义                                 | 默认值                                | 说明                              |
| ---------- | ------------------------------------ | ------------------------------------- | --------------------------------- |
| leftSecond | 剩余时间                             | 0                                     |
| format     | 格式                                 | dd:hh:mm:ss                           | 不区分大小写，:是分隔符，可以修改 |
| style      | 样式（只能设置 color 和 background） | {color: 'white', background: 'black'} |
| standard   | 基准大小                             | 100px                                 | 即：高。同比例放大缩小            |

## Method

| name | 含义           | 默认值 |
| ---- | -------------- | ------ |
| end  | 结束的回调方法 |        |
