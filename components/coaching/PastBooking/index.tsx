import { Avatar, Typography, Card, Row, Col, Modal } from "antd";
import React, { useState } from "react";
import styles from "./PastBooking.module.css";
import { CurrencyRupeeIcon } from "@heroicons/react/outline";
import ButtonLight from "../../common/ButtonComponent/ButtonLight";
import ButtonDark from "../../common/ButtonComponent/ButtonDark";
import Link from "next/link";
const { Text } = Typography;

const PastBooking = () => {
  return (
    <>
      <div className={styles.PbContainer}>
        <Row>
          <Col span={4} className={styles.PbAvatarCol}>
            {" "}
            <Avatar
              className={styles.PbAvatar}
              src={"/assets/images/Ragini.png"}
            />
          </Col>
          <Col span={14} className={styles.PbMiddleCol}>
            <Row>
              <Link href="/learn/id" passHref>
                <Text className={styles.PbName}>kavita neelakantan</Text>
              </Link>
            </Row>
            <Row>
              <Text className={styles.PbDescription}>3 sessions</Text>
            </Row>
          </Col>
          <Col span={5} className={styles.PbFeeCol}>
            <button className={styles.PbFeeButton}>
              ₹15000
            </button>
          </Col>
        </Row>
        <Row className={styles.PbMiddleRow}>
          <Col span={8} className={styles.PbTextCol}>
            <Row>
              <Text className={styles.PbHeading}>date</Text>
            </Row>
            <Row>
              <Text className={styles.PbSubHeading}>25 feb 2022</Text>
            </Row>
          </Col>
          <Col span={8} className={styles.PbTextCol}>
            <Row>
              <Text className={styles.PbHeading}>booking id</Text>
            </Row>
            <Row>
              <Text className={styles.PbSubHeading}>123</Text>
            </Row>
          </Col>
          <Col span={8} className={styles.PbTextCol2}>
            <Row>
              <Text className={styles.PbHeading}>payment id</Text>
            </Row>
            <Row>
              <Text className={styles.PbSubHeading}>rzp12908292</Text>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col span={12} className={styles.PbButtonCol}>
            {" "}
            <ButtonLight name="rate coach" />
          </Col>
          <Col span={12} className={styles.PbButtonCol2}>
            {" "}
            <ButtonDark name="book session" />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default PastBooking;
