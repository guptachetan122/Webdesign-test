import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Typography, Card, Row, Col } from "antd";
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
      
        <Card className={styles.Container}>
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
                  onClick={handleOpen}
                  className={styles.Icon}
                />
              ) : (
                <DownOutlined
                  onClick={handleOpen}
                  className={styles.Icon}
                />
              )}
            </Col>
          </Row>
        </Card>
        {isClicked ? (
          <>
            <Member  />
            <Member />
            <Member />
            <Member />{" "}
          </>
        ) : null}
     
    </>
  );
};

export default MemberRecommendations;
