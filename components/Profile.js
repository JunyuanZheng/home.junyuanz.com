import React, { Component } from "react";
import { Row, Col } from "antd";

export default class Profile extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginBottom: "45px"
        }}
      >
        <h1>Profile</h1>
        <p>Software Engineer</p>
        <Row type="flex" justify="center">
          <Col span={8}>
            <div
              style={{
                textAlign: "left"
              }}
            >
              <h2>About me</h2>
              <div>
                I am a software with 1.5+ years experience on full stack
                development, and 2+ years experience on embedded system
                development. Currently I am working as a software engineer for
                University of British Columbia.
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div
              style={{
                textAlign: "right"
              }}
            >
              <h2>Details</h2>
              <ul
                style={{
                  listStyle: "none",
                  padding: "0"
                }}
              >
                <li>Name: Joseph (Junyuan) Zheng</li>
                <li>Location: Vancouver, BC, Canada</li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
