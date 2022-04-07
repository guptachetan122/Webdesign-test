// this page is recommendations.tsx
import React from "react";
import styles from "../../../styles/Superconnections.module.css";
import { Card, Col, Input, Row, Switch } from "antd";
import Sidebar from "../../../ui/Sidebar";
import Member from "../../../components/sc/Member";
import { SearchOutlined } from "@ant-design/icons";
import BackDiv from "../../../components/common/BackDiv";

const MessageReq = () => {
  function onChange() {
    console.log("clicked");
  }

  return (
    <>
      <Row className={styles.Body}>
        <Col span={6} className={styles.Sidebar}>
          {" "}
          <Sidebar pageName={"superconnections"} />{" "}
        </Col>
        <Col span={12} className={styles.MiddleCol}>
          <Row>
            <Col span={2}></Col>
            <Col span={20}>
              <BackDiv pageName="chats" />
             
            </Col>
            <Col span={2}></Col>
          </Row>
        </Col>
        <Col span={6} className={styles.ThirdCol}>
          <div className={styles.ScCard}>
            <Row>
              <Col span={20}>receive messages from other members </Col>
              <Col span={4}>
                {" "}
                <Switch defaultChecked onChange={onChange} />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default MessageReq;
