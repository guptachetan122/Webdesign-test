// this page is 1-1 coaching

import { Col, Row } from "antd";
import React from "react";
import Sidebar from "../../components/Sidebar";
import Subheader from "../../components/Subheader2";
import { coachingNavbar } from "../../constants/constants";
import styles from "../../styles/Feed.module.css";

const Coaching = () => {
  return (
    <>
      <div className={styles.Header}>
        {" "}
        <Subheader SubheaderData={coachingNavbar} />{" "}
      </div>
      <Row className={styles.Body}>
        <Col span={6} className={styles.sidebarPos}>
          {" "}
          <Sidebar pageName={"learn"} />{" "}
        </Col>
        <Col span={12} className={styles.middleCol}>
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

export default Coaching;
