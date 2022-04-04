import { CheckCircleOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React from "react";
import styles from "./ButtonCoach.module.css";

const ButtonCoach = ({ isActive = false, num = "", price = "" }) => {
  return (
    <>
      {isActive ? (
        <button className={styles.ButtonCoachActive}>
          <Row>
            <Col span={2} className={styles.AlignItems}>
              <CheckCircleOutlined className={styles.ButtonCoachIcon} />
            </Col>
            <Col span={6}>{num} session</Col>
            <Col span={8}></Col>
            <Col span={6}>₹{price}</Col>
            <Col span={1}></Col>
          </Row>
          <Row>
            <Col span={1}></Col>
            <Col span={8} className={styles.AlignItems}>
              {" "}
              <button className={styles.SubButtonCoachActive}>
                most popular
              </button>
            </Col>
            <Col span={6}></Col>
            <Col span={8}></Col>
            <Col span={1}></Col>
          </Row>
        </button>
      ) : (
        <button className={styles.ButtonCoach}>
          <Row>
            <Col span={2}></Col>
            <Col span={6}>{num} session</Col>
            <Col span={8}></Col>
            <Col span={6}>₹{price}</Col>
            <Col span={2}></Col>
          </Row>
        </button>
      )}
    </>
  );
};

export default ButtonCoach;
