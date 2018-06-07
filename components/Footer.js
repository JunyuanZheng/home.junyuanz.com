import { Layout } from "antd";
import React, { Component } from "react";
import Contact from "./Contact";

export default class Footer extends Component {
  render() {
    return (
      <Layout.Footer
        style={{
          transition: "opacity 0.5s",
          background: "#fff",
          marginTop: "24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <Contact />
        <div
          style={{
            textAlign: "center"
          }}
        >
          © 2018 Junyuan Zheng
        </div>
      </Layout.Footer>
    );
  }
}
