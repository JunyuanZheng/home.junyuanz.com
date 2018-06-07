import { Layout, Avatar } from "antd";
import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <Layout.Header
        style={{
          transition: "opacity 0.5s",
          background: "#fff",
          marginBottom: "24px",
          padding: "0 24px",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <span
          style={{
            fontSize: "16px",
            fontFamily: "'Raleway', 'Hiragino Sans GB', sans-serif",
            textTransform: "uppercase"
          }}
        >
          Junyuan Zheng
        </span>
        <Avatar src="/static/avatar.jpg" size="large" />
      </Layout.Header>
    );
  }
}
