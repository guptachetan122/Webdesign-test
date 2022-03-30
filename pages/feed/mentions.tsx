import { Col, Row } from "antd";
import React from "react";
import Sidebar from "../../ui/Sidebar";
import Subheader from "../../ui/Subheader2";
import { feedNavbar } from "../../constants/constants";
import styles from "../../styles/Feed.module.css";
const MentionsFeed = () => {
  return (
    <>
      {/* <div className={styles.Header}>
        {" "}
        <Subheader SubheaderData={feedNavbar} />{" "}
      </div> */}
      <Row className={styles.Body}>
        <Col span={6} className={styles.sidebarPos}>
          {" "}
          <Sidebar pageName={"feed"} />{" "}
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

export default MentionsFeed;
