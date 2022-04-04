import { Col, Row } from "antd";
import React from "react";
import Sidebar from "../../ui/Sidebar";
import Subheader from "../../ui/Subheader2";
import styles from "../../styles/Feed.module.css";

const SentSc = () => {
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
            <Col span={20}></Col>
            <Col span={2}></Col>
          </Row>
        </Col>
        <Col span={6}></Col>
      </Row>
    </>
  );
};

export default SentSc;
