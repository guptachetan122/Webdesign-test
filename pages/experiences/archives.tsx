import { Col, Row } from "antd";
import React from "react";
import Sidebar from "../../components/Layout/Sidebar";
import styles from "../../styles/Experience.module.css";
import UpcomingExperienceCard from "../../components/experience/UpcomingExperienceCard";
import ArchiveExperienceCard from "../../components/experience/ArchiveExperienceCard";

const ArchiveVideos = () => {
  return (
    <>
      <Row className={styles.Body}>
        <Col span={6} className={styles.Sidebar}>
          {" "}
          <Sidebar pageName={"experiences"} />{" "}
        </Col>
        <Col span={12} className={styles.MiddleCol}>
          <Row>
            <Col span={4}></Col>
            <Col span={15}>
              <div>
                <UpcomingExperienceCard isArchived Name="online" />
                <UpcomingExperienceCard isArchived Name="online" />
                <UpcomingExperienceCard isArchived Name="online" />
              </div>
            </Col>
            <Col span={4}></Col>
          </Row>
        </Col>
        <Col span={6}></Col>
      </Row>
    </>
  );
};

export default ArchiveVideos;
