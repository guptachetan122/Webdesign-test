import { Avatar, Typography, Card, Row, Col, Modal } from "antd";
import React, { useState } from "react";
import styles from "./CoachCard.module.css";
import {
  LocationMarkerIcon,
  StarIcon,
  ClockIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
const { Text } = Typography;

const CoachCard = () => {
  return (
    <>
      <Link href="/learn/id" passHref>
        <div className={styles.CoachCardContainer}>
          <Row>
            <Col span={4} className={styles.CoachCardAvatarCol}>
              {" "}
              <Avatar
                className={styles.CoachCardAvatar}
                src={"/assets/images/Ragini.png"}
              />
            </Col>
            <Col span={18} className={styles.CoachCardMiddleCol}>
              <Row className={styles.CoachCardRow}>
                <Text className={styles.CoachCardName}>kavita neelakantan</Text>
              </Row>
              <Row className={styles.CoachCardRow}>
                <Text className={styles.CoachCardDescription}>
                  executive coach | women’s leadership and growth
                </Text>
              </Row>
              <Row className={styles.CoachCardIconRow}>
                <button className={styles.CoachCardButton}>
                  <LocationMarkerIcon className={styles.CoachCardIcon} /> delhi
                </button>
                <button className={styles.CoachCardButton}>
                  <ClockIcon className={styles.CoachCardIcon} /> 20+ years
                </button>
                <button className={styles.CoachCardButton}>
                  <StarIcon className={styles.CoachCardIcon} /> 4.7
                </button>
              </Row>
            </Col>
          </Row>
        </div>
      </Link>
    </>
  );
};

export default CoachCard;
