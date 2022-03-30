// this page is 1-1 coaching

import { Col, Row, Typography } from "antd";
import Link from "next/link";
import React from "react";
import ChemistrySession from "../../components/coaching/ChemistrySession";
import CoachCard from "../../components/coaching/CoachCard";
import ButtonLight from "../../components/common/ButtonComponent/ButtonLight";
import Sidebar from "../../components/Sidebar";
import Subheader from "../../components/Subheader2";
import { coachingNavbar } from "../../constants/constants";
import styles from "../../styles/Learn.module.css";
const { Text } = Typography;

const Coaching = () => {
  return (
    <>
      {/* <div className={styles.Header}>
        {" "}
        <Subheader SubheaderData={coachingNavbar} />{" "}
      </div> */}
      <Row className={styles.Body}>
        <Col span={6} className={styles.sidebarPos}>
          {" "}
          <Sidebar pageName={"learn"} />{" "}
        </Col>
        <Col span={12} className={styles.middleCol}>
          <Row>
            <Col span={2}></Col>
            <Col span={20}>
              <Row>
                <ChemistrySession chemSessions={3}></ChemistrySession>
              </Row>
              <Row className={styles.row}>
                <Col span={4}>
                  <Text className={styles.textStyle}>your coach</Text>
                </Col>
                <Col span={16}></Col>
                <Col span={4}>
                  <Link href="/learn/pastbookings" passHref>
                    <a>
                      <Text className={styles.textLinkStyle}>
                        view bookings
                      </Text>
                    </a>
                  </Link>
                </Col>
              </Row>
              <Row>
                <CoachCard />
              </Row>
              <Row className={styles.row}>
                <Text className={styles.textStyle}>
                  handpicked top executive and wellness coaches for you
                </Text>
              </Row>
              <Row className={styles.row}>
                <ButtonLight name="filter and sort" />
              </Row>
              <Row className={styles.row}>
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
        <Col span={6}></Col>
      </Row>
    </>
  );
};

export default Coaching;
