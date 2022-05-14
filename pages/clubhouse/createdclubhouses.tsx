import { Col, Row, Typography } from "antd";
import React from "react";
import ClubhouseCard from "../../components/clubhouse/ClubhouseCard";
import Sidebar from "../../components/Layout/Sidebar";
import styles from "../../styles/Clubhouse.module.css";

const { Text } = Typography;
const Starred = () => {
  return (
    <>
      <Row className={styles.Body}>
        <Col span={6} className={styles.Sidebar}>
          <Sidebar pageName={"clubhouse"} />{" "}
        </Col>
        <Col span={12} className={styles.MiddleCol}>
          <Row>
            <Col span={2}></Col>
            <Col span={20}>
              {" "}
              <ClubhouseCard isJoined isPinned upcomingHuddle isFounder />
              <ClubhouseCard isJoined isPinned isFounder />
              <ClubhouseCard isJoined isPinned upcomingHuddle isFounder/>
              <ClubhouseCard isJoined isPinned isFounder />
              <ClubhouseCard isJoined isPinned isFounder />
            </Col>
            <Col span={2}></Col>
          </Row>
        </Col>
        <Col span={6} className={styles.SidebarButton}>
          {" "}
        </Col>
      </Row>
    </>
  );
};

export default Starred;
