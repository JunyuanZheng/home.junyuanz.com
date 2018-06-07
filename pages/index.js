import { Layout } from "antd";
import React, { Component } from "react";
import Index from "../index.js";
import { Footer, Header, Content } from "../components";
import { notification } from "antd";

export default class IndexPage extends Component {
  componentDidMount() {
    notification.info({
      message: "Tech Stack",
      description:
        "React.js SSR, Node.js, Express.js, EC2, Route 53, ECR, Docker, Docker Compose"
    });
  }

  render() {
    return (
      <Index>
        <Layout
          style={{
            minHeight: "100vh"
          }}
        >
          <Header />
          <Layout.Content
            style={{
              background: "#fff"
            }}
          >
            <Content />
          </Layout.Content>
          <Footer />
        </Layout>
      </Index>
    );
  }
}
