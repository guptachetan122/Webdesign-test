// this page is recommendations.tsx
import React from "react";
import styles from "../../../styles/Superconnections.module.css";
import { Card, Col, Input, Row, Switch } from "antd";
import Sidebar from "../../../ui/Sidebar";
import Member from "../../../components/sc/Member";
import { SearchOutlined } from "@ant-design/icons";
import BackHeader from "../../../components/common/BackHeader";

const Chats = () => {
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
              <BackHeader pageName="chats" />
              <Input
                className={styles.ScInput}
                prefix={<SearchOutlined className={styles.ScIconSize} />}
                placeholder={`  search messages`}
              />
              <Member pageName="chats" />
              <Member pageName="chats" />
              <Member pageName="chats" />
              <Member pageName="chats" />
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
                <Switch
                  defaultChecked
                  onChange={onChange}
                />
              </Col>
            </Row>
          </div>

          <Row>
            {" "}
            <div className={styles.ScCard}>
              messages from new superconnections appear here till you reply to
              them, your posts will now appear in their private feed. once you
              reply to them, their posts will appear in your private feed too.
            </div>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Chats;
