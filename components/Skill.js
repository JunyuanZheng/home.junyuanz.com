import React, { Component } from "react";
import { List, Rate } from "antd";

export default class Skill extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <h1>Skills</h1>
        <List
          grid={{ gutter: 16, column: 2 }}
          itemLayout="horizontal"
          dataSource={[
            {
              name: "React.js",
              rate: 5
            },
            {
              name: "Docker",
              rate: 5
            },
            {
              name: "Azure",
              rate: 5
            },
            {
              name: "Javascript",
              rate: 5
            },
            {
              name: "Java",
              rate: 4
            },
            {
              name: "C",
              rate: 5
            },
            {
              name: "TypeScript",
              rate: 5
            },
            {
              name: "MongoDB",
              rate: 5
            },
            {
              name: "Git",
              rate: 5
            },
            {
              name: "AWS",
              rate: 4
            },
            {
              name: "T-SQL",
              rate: 4
            },
            {
              name: "Redis",
              rate: 4
            },
            {
              name: "MATLAB",
              rate: 4
            },
            {
              name: "ASP.NET Core",
              rate: 3
            },
            {
              name: "C#",
              rate: 3
            },
            {
              name: "Python",
              rate: 3
            },
            {
              name: "Microsoft SQL Server",
              rate: 3
            },
            {
              name: "PostgreSQL",
              rate: 3
            },
            {
              name: "Django",
              rate: 2
            },
            {
              name: "Spark",
              rate: 2
            },
            {
              name: "Hadoop",
              rate: 2
            }
          ]}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                title={item.name}
                description={<Rate disabled defaultValue={item.rate} />}
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}
