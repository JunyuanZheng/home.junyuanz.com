import Index from "../index.js";
import { Layout } from "antd";
import { Footer } from "../components";

export default () => (
  <Index>
    <Layout.Header>abc</Layout.Header>
    <Layout.Content style={{ padding: "0 50px" }}>
      <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
        Content
      </div>
    </Layout.Content>
    <Footer />
  </Index>
);
