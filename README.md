<h1 align="center">
react-flip-countdown
</h1>

## Install

```bash
yarn add react-flip-countdown
```

## Basic Usage

```jsx
import FlipCountDown from "react-flip-countdown";

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
