import {Row,  Col, Typography } from "antd";
import React from "react";
import styles from "./ExpBooked.module.css";
const { Text } = Typography;

const ExpBooked = () => {
  return (
    <div className={styles.ExpBookedContainer}>
      <Row>
        <Col span={4} className={styles.ExpBookedLeftCol}>
          <Row>
            <Text className={styles.ExpBookedDate}>25 Feb</Text>
          </Row>
          <Row>
            <Text className={styles.ExpBookedTime}>07:30 PM</Text>
          </Row>
        </Col>
        <Col span={20} className={styles.ExpBookedRightCol}>
          <Row>
            {" "}
            <Text className={styles.ExpBookedTitle}>
              driving high - performance teams
            </Text>
          </Row>
          <Row>
            <Text className={styles.ExpBookedOwner}>
              experience by leap.club
            </Text>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ExpBooked;
