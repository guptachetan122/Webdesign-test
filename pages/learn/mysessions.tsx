import { Col, Row, Typography } from "antd";
import React from "react";
import Sidebar from "../../ui/Sidebar";
import styles from "../../styles/Learn.module.css";
import PastBooking from "../../components/coaching/PastBooking";
const { Text } = Typography;

const MySessions = () => {
  console.log("logg");
  return (
    <>
      <Row className={styles.Body}>
        <Col span={6} className={styles.Sidebar}>
          {" "}
          <Sidebar pageName={"learn"} />{" "}
        </Col>
        <Col span={12} className={styles.MiddleCol}>
          <Row>
            <Col span={3}></Col>
            <Col span={18} className={styles.MiddleContent}>
              <PastBooking />
              <PastBooking />
              <PastBooking />
              <PastBooking />
            </Col>
            <Col span={3}></Col>
          </Row>
        </Col>
        <Col span={4}></Col>
      </Row>
    </>
  );
};

export default MySessions;
