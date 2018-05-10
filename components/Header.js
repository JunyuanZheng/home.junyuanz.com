import { Layout } from "antd";
import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <Layout.Header style={{ position: "fixed", width: "100%" }}>
        <div className="logo" />
      </Layout.Header>
    );
  }
}
