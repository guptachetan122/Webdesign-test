import {Row,  Col, Typography } from "antd";
import React from "react";
import styles from "./ExperienceBooked.module.css";
const { Text } = Typography;

const ExperienceBooked = () => {
  return (
    <div className={styles.Container}>
      <Row>
        <Col span={4} className={styles.LeftCol}>
          <Row>
            <Text className={styles.Date}>25 Feb</Text>
          </Row>
          <Row>
            <Text className={styles.Time}>07:30 PM</Text>
          </Row>
        </Col>
        <Col span={20} className={styles.RightCol}>
          <Row>
            {" "}
            <Text className={styles.Title}>
              driving high - performance teams
            </Text>
          </Row>
          <Row>
            <Text className={styles.Owner}>
              experience by leap.club
            </Text>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ExperienceBooked;
