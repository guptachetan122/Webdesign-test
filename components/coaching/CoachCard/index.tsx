import { Avatar, Typography, Row, Col } from "antd";
import React from "react";
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
        <div className={styles.Container}>
          <Row>
            <Col span={4} className={styles.AvatarCol}>
              {" "}
              <Avatar
                className={styles.Avatar}
                src={"/assets/images/Ragini.png"}
              />
            </Col>
            <Col span={18} className={styles.MiddleCol}>
              <Row className={styles.Row}>
                <Text className={styles.Name}>kavita neelakantan</Text>
              </Row>
              <Row className={styles.Row}>
                <Text className={styles.Description}>
                  executive coach | women’s leadership and growth
                </Text>
              </Row>
              <Row className={styles.IconRow}>
                <button className={styles.Button}>
                  <LocationMarkerIcon className={styles.Icon} /> delhi
                </button>
                <button className={styles.Button}>
                  <ClockIcon className={styles.Icon} /> 20+ years
                </button>
                <button className={styles.Button}>
                  <StarIcon className={styles.Icon} /> 4.7
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
