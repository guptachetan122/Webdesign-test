import { Col, Row } from "antd";
import React from "react";
import Sidebar from "../../components/Layout/Sidebar";
import styles from "../../styles/Experience.module.css";
import ExpBooked from "../../components/experience/ExperienceBooked";

const booked = () => {
  return (
    <>
      <Row className={styles.Body}>
        <Col span={6} className={styles.Sidebar}>
          {" "}
          <Sidebar pageName={"experiences"} />{" "}
        </Col>
        <Col span={12} className={styles.MiddleCol}>
          <Row>
            <Col span={2}></Col>{" "}
            <Col span={20}>
              {" "}
              <ExpBooked />
              <ExpBooked />
              <ExpBooked />
              <ExpBooked />
              <ExpBooked />
            </Col>
            <Col span={1}></Col>
          </Row>
        </Col>
        <Col span={6}></Col>
      </Row>
    </>
  );
};

export default booked;
