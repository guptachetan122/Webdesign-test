import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Typography, Card, Row, Col } from "antd";
import React, { useState } from "react";
import Member from "../Member";
import styles from "./MemberRecommendations.module.css";
const { Text } = Typography;

const MemberRecommendations = ({ title = "", subTitle = "" , isClicked = false}) => {

  return (
    <>
        <div className={styles.Container}>
          <Row>
            <Col span={22}>
              <Row>
                {" "}
                <Text className={styles.Title}>
                  {title}
                </Text>
              </Row>
              <Row>
                <Text className={styles.SubTitle}>
                  {subTitle}
                </Text>
              </Row>
            </Col>
            <Col span={2}>
              {isClicked ? (
                <UpOutlined
                  className={styles.Icon}
                />
              ) : (
                <DownOutlined
                  className={styles.Icon}
                />
              )}
            </Col>
          </Row>
        </div>  
    </>
  );
};

export default MemberRecommendations;
