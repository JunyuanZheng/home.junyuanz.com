import React, { Component } from "react";
import Profile from "./Profile";
import Experience from "./Experience";
import Skill from "./Skill";

export default class Content extends Component {
  render() {
    return (
      <div
        style={{
          padding: "10px",
          display: "flex",
          flexFlow: "column",
          textAlign: "center"
        }}
      >
        <Profile />
        <Experience />
        <Skill />
      </div>
    );
  }
}
