import { Avatar, Typography, Card, Row, Col, Modal } from "antd";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./PastBooking.module.css";
import {
  LocationMarkerIcon,
  StarIcon,
  ClockIcon,
  CurrencyRupeeIcon
} from "@heroicons/react/outline";
const { Text } = Typography;

const PastBooking = () => {
  return (
    <>
      <div className={styles.MemberContainer}>
        <Row>
          <Col span={4} className={styles.MemberAvatarCol}>
            {" "}
            <Avatar
              className={styles.MemberAvatar}
              src={"/assets/images/Ragini.png"}
            />
          </Col>
          <Col span={14} className={styles.MemberMiddleCol}>
            <Row className={styles.row}>
              <Text className={styles.MemberName}>ragini das</Text>
            </Row>
            <Row className={styles.row}>
              <Text className={styles.MemberDescription}>
                3 sessions
              </Text>
            </Row>
          </Col>
          <Col span={5} className={styles.buttonStyle}>
            <CurrencyRupeeIcon className={styles.CardIcon}/>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default PastBooking;
