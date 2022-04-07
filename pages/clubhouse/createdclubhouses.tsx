import { Col, Row, Typography } from "antd";
import Link from "next/link";
import React from "react";
import ClubhouseCard from "../../components/clubhouse/ClubhouseCard";
import ClubhouseModal from "../../components/common/Modal/ClubhouseModal";
import Sidebar from "../../ui/Sidebar";
import styles from "../../styles/ClubHouse.module.css";
import { UserGroupIcon as ChInactive } from "@heroicons/react/outline";
import CreateChModal from "../../components/common/Modal/CreateChModal";

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
              <ClubhouseCard isJoined isPinned upcomingHuddle />
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
