// this page is 1-1 coaching

import { Col, Row, Typography } from "antd";
import Link from "next/link";
import React from "react";
import ChemistrySession from "../../components/coaching/ChemistrySession";
import CoachCard from "../../components/coaching/CoachCard";
import ButtonLight from "../../components/common/ButtonComponent/ButtonLight";
import Sidebar from "../../ui/Sidebar";
import styles from "../../styles/Learn.module.css";
const { Text } = Typography;

const Coaching = () => {
  return (
    <>
      <Row className={styles.Body}>
        <Col span={6} className={styles.Sidebar}>
          {" "}
          <Sidebar pageName={"learn"} />{" "}
        </Col>
        <Col span={12} className={styles.MiddleCol}>
          <Row>
            <Col span={4}></Col>
            <Col span={16}>
              <Row>
                <ChemistrySession chemSessions={3}></ChemistrySession>
              </Row>
              <Row className={styles.LearnRow}>
                <Col span={8} className={styles.LearnCol}>
                  <Text className={styles.LearnText}>your coach</Text>
                </Col>
                <Col span={8}></Col>
                <Col span={8} className={styles.LearnCol2}>
                  <Link href="/learn/mysessions" passHref>
                    <a>
                      <Text className={styles.LearnBookingLink}>
                        view bookings
                      </Text>
                    </a>
                  </Link>
                </Col>
              </Row>
              <Row>
                <CoachCard />
              </Row>
              <Row className={styles.LearnRow}>
                <Text className={styles.LearnText}>
                  handpicked top executive and wellness coaches for you
                </Text>
              </Row>
              <Row className={styles.LearnRow}>
                <ButtonLight name="filter and sort" />
              </Row>
              <Row className={styles.LearnRow}>
                <CoachCard />
                <CoachCard />
                <CoachCard />
                <CoachCard />
                <CoachCard />
              </Row>
            </Col>
            <Col span={2}></Col>
          </Row>
        </Col>
        <Col span={4}></Col>
      </Row>
    </>
  );
};

export default Coaching;
