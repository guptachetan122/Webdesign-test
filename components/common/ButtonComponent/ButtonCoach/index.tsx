import { CheckCircleOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React from "react";
import styles from "./ButtonCoach.module.css";

const ButtonCoach = ({ isActive = false, num = "", price = "" }) => {

  const onClick = () => {
    
  }
  return (
    <>
      {num == "3" ? (
        <button className={isActive ? styles.ButtonActive : styles.Button}>
          <Row>
            <Col span={2}>
              {isActive ? (
                <CheckCircleOutlined className={styles.ButtonIcon} />
              ) : null}
            </Col>
            <Col span={6}>{num} session</Col>
            <Col span={8}></Col>
            <Col span={6}>₹{price}</Col>
            <Col span={2}></Col>
          </Row>
          <Row>
            <Col span={1}></Col>
            <Col span={8} className={styles.SubButtonCol}>
              {" "}
              <button className={styles.SubButtonActive}>most popular</button>
            </Col>
            <Col span={6}></Col>
            <Col span={8}></Col>
            <Col span={1}></Col>
          </Row>
        </button>
      ) : (
        <button className={isActive ? styles.ButtonActive : styles.Button}>
          <Row>
            <Col span={2}>
              {" "}
              {isActive ? (
                <CheckCircleOutlined className={styles.ButtonIcon} />
              ) : null}
            </Col>
            <Col span={6}>{num} session</Col>
            <Col span={8}></Col>
            <Col span={6}>₹{price}</Col>
            <Col span={2}></Col>
          </Row>
        </button>
      )}

      {/* {num == "3" && isActive ? (
        <button className={styles.ButtonActive}>
          <Row>
            <Col span={2} className={styles.AlignItems}></Col>
            <Col span={6}>{num} session</Col>
            <Col span={8}></Col>
            <Col span={6}>₹{price}</Col>
            <Col span={1}></Col>
          </Row>
          <Row>
            <Col span={1}></Col>
            <Col span={8} className={styles.SubButtonCol}>
              {" "}
              <button className={styles.SubButtonActive}>most popular</button>
            </Col>
            <Col span={6}></Col>
            <Col span={8}></Col>
            <Col span={1}></Col>
          </Row>
        </button>
      ) : null} */}
    </>
  );
};

export default ButtonCoach;
