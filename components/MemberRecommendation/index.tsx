import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Avatar, Typography, Card, Row, Col } from "antd";
import React, { useState } from "react";
import Member from "../Member";
import styles from "./MemberRecommendations.module.css";
const { Text } = Typography;

const MemberRecommendations = ({ title = "", subTitle = "" }) => {
  const [isClicked, setClicked] = useState(false);
  const handleOpen = () => {
    setClicked(!isClicked);
  };
  return (
    <>
      <div className={styles.MemberRecommendationsContainer}>
        <Card className={styles.MemberRecommendationsCard}>
          <Row>
            <Col span={22}>
              <Row>
                {" "}
                <Text className={styles.MemberRecommendationsTitle}>
                  {title}
                </Text>
              </Row>
              <Row>
                <Text className={styles.MemberRecommendationsSubTitle}>
                  {subTitle}
                </Text>
              </Row>
            </Col>
            <Col span={2}>
              {isClicked ? (
                <UpOutlined
                  onClick={handleOpen}
                  className={styles.MemberRecommendationsIcon}
                />
              ) : (
                <DownOutlined
                  onClick={handleOpen}
                  className={styles.MemberRecommendationsIcon}
                />
              )}
            </Col>
          </Row>
        </Card>
        {isClicked ? (
          <>
            <Member pageName="recommendations" />
            <Member pageName="recommendations" />
            <Member pageName="recommendations" />
            <Member pageName="recommendations" />{" "}
          </>
        ) : null}
      </div>
    </>
  );
};

export default MemberRecommendations;
