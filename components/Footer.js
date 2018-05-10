import { Layout } from "antd";
import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <Layout.Footer
        style={{
          transition: "opacity 0.5s",
          background: "#fff",
          marginTop: "24px"
        }}
      >
        <div>© 2018 Junyuan Zheng</div>
      </Layout.Footer>
    );
  }
}
