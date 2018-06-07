import React, { Component } from "react";
import { Row, Col, List, Icon } from "antd";

export default class Experience extends Component {
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
        <h1>Experience</h1>
        <Row type="flex" justify="center">
          <Col span={8}>
            <div
              style={{
                textAlign: "left"
              }}
            >
              <h2>Education</h2>
              <List
                itemLayout="horizontal"
                dataSource={[
                  {
                    title: "University of British Columbia",
                    duration: "Sept 2015 - May 2017",
                    detail:
                      "M.Eng in Electrical and Computer Engineering, GPA: 88.6/100"
                  },
                  {
                    title: "Beijing Jiaotong University",
                    duration: "Sept 2011 - July 2015",
                    detail: "B.Eng in Electrical Engineering, GPA: 85.7/100"
                  }
                ]}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      title={item.title}
                      description={
                        <div>
                          <div>{item.duration}</div>
                          <div>{item.detail}</div>
                        </div>
                      }
                    />
                  </List.Item>
                )}
              />
            </div>
          </Col>
          <Col span={8}>
            <div
              style={{
                textAlign: "right"
              }}
            >
              <h2>Careers</h2>
              <List
                itemLayout="horizontal"
                dataSource={[
                  {
                    title: "Software Engineer, University of British Columbia",
                    duration: "May 2015 - Present",
                    detail: "Software Engineer for ViDeX Project",
                    location: "Vancouver, BC, Canada",
                    link: "https://videx.ece.ubc.ca"
                  },
                  {
                    title: "Software Engineer Intern, Garmin Ltd.",
                    duration: "May 2016 - December 2016",
                    detail:
                      "Embedded System Engineer for Running Dynamics Pod Project",
                    location: "Cochrane, AB, Canada",
                    link: "https://buy.garmin.com/en-CA/CA/p/561205"
                  },
                  {
                    title: "Software Engineer Intern, Yobo Technology Inc.",
                    duration: "November 2015 - March 2016",
                    detail: "Embedded System Engineer for Dencare Project",
                    location: "Vancouver, BC, Canada"
                  },
                  {
                    title:
                      "Undergraduate Research Assistant, Beijing Jiaotong University",
                    duration: "November 2015 - March 2016",
                    detail:
                      "Undergraduate Research Assistant for IFEC2015 Project",
                    location: "Beijing, Canada",
                    link: "http://energychallenge.weebly.com/ifec-2015.html"
                  }
                ]}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      title={item.title}
                      description={
                        <div>
                          <div>{item.duration}</div>
                          <div>{item.detail}</div>
                          <div>{item.location}</div>
                          {item.link && (
                            <a href={item.link}>
                              <Icon type="link" />
                            </a>
                          )}
                        </div>
                      }
                    />
                  </List.Item>
                )}
              />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
