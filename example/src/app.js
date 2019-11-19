import React from "react";
import { render } from "react-dom";
import FlipCountDown from "../../src/";

const App = () => (
  <FlipCountDown
    option={{
      leftSecond: 100,
      format: "dd:hh:mm:ss",
      end: () => {
        alert("end");
      },
      // style: {
      //   // color: "black",
      //   // background: "red"
      // },
      standard: "50px"
    }}
  />
);
render(<App />, document.getElementById("root"));
