import React, { Component } from "react";
import { Icon } from "antd";

export default class Footer extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: "20px 0"
        }}
      >
        <a href="https://github.com/JunyuanZheng">
          <Icon style={{ fontSize: 24, margin: "0 20px" }} type="github" />
        </a>
        <a href="https://www.linkedin.com/in/junyuan-zheng">
          <Icon style={{ fontSize: 24, margin: "0 20px" }} type="linkedin" />
        </a>
        <a href="mailto:joseph.zjy@gmail.com">
          <Icon style={{ fontSize: 24, margin: "0 20px" }} type="mail" />
        </a>
      </div>
    );
  }
}
