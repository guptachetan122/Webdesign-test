import { Avatar, Typography, Card, Row, Col, Modal } from "antd";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./CoachCard.module.css";
import { LocationMarkerIcon , StarIcon , ClockIcon} from "@heroicons/react/outline";
const { Text } = Typography;

const CoachCard = () => {
  return (
    <>
      <Card className={styles.MemberContainer}>
        <Row>
          <Col span={4} className={styles.MemberAvatarCol}>
            {" "}
            <Avatar
              className={styles.MemberAvatar}
              src={"/assets/images/Ragini.png"}
            />
          </Col>
          <Col span={16} className={styles.MemberMiddleCol}>
            <Row className={styles.row}>
              <Text className={styles.MemberName}>ragini das</Text>
            </Row>
            <Row className={styles.row}>
              <Text className={styles.MemberDescription}>
                in-house counsel looking for new opportunities
              </Text>
            </Row>
            <Row className={styles.iconRow}>
              <button className={styles.CardButton}>
                <LocationMarkerIcon className={styles.CardIcon} /> delhi
              </button>
              <button className={styles.CardButton}>
                <ClockIcon className={styles.CardIcon} /> 20+ years
              </button>
              <button className={styles.CardButton}>
                <StarIcon className={styles.CardIcon} /> 4.7
              </button>
            </Row>
          </Col>
          <Col span={4} className={styles.buttonStyle}></Col>
        </Row>
      </Card>
    </>
  );
}

export default CoachCard