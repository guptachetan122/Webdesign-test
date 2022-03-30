import { Col, Row } from "antd";
import React from "react";
import Sidebar from "../../ui/Sidebar";
import Subheader from "../../ui/Subheader2";
import { experiencesNavbar } from "../../constants/constants";
import styles from "../../styles/Experience.module.css";

const booked = () => {
  return (
    <>
      {/* <div className={styles.Header}>
        {" "}
        <Subheader SubheaderData={experiencesNavbar} />{" "}
      </div> */}
      <Row className={styles.Body}>
        <Col span={6} className={styles.sidebarPos}>
          {" "}
          <Sidebar pageName={"experiences"} />{" "}
        </Col>
        <Col span={12} className={styles.middleCol}></Col>
        <Col span={6}></Col>
      </Row>
    </>
  );
};

export default booked;
