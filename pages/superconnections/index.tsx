// this page is recommendations.tsx
import React from "react";
import { superconnectionNavbar } from "../../constants/constants";
import styles from "../../styles/Feed.module.css";
import Subheader from "../../components/Subheader";
import { Col, Row } from "antd";
import Sidebar from "../../components/Sidebar";

const recommendations = () => {
  return (
    <>
      <div className={styles.Header}>
        {" "}
        <Subheader data={superconnectionNavbar} />{" "}
      </div>
      <Row className={styles.Body}>
        <Col
          md={5}
          lg={7}
          style={{
            paddingTop: "3rem",
          }}
          className={styles.sidebarPos}
        >
          {" "}
          <Sidebar data={"superconnections"} />{" "}
        </Col>
        <Col md={14} lg={10}></Col>
        <Col md={5} lg={7}></Col>
      </Row>
    </>
  );
}

export default recommendations;
