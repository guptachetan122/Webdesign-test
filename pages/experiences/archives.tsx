import { Col, Row } from "antd";
import React from "react";
import Sidebar from "../../ui/Sidebar";
import styles from "../../styles/Experience.module.css";
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
            <Col span={5}></Col>
            <Col span={14}>
              <div style={{}}>
                <ArchiveExperienceCard  />
                <ArchiveExperienceCard  />
                <ArchiveExperienceCard  />
              </div>
            </Col>
            <Col span={5}></Col>
          </Row>
        </Col>
        <Col span={6}></Col>
      </Row>
    </>
  );
};

export default ArchiveVideos;
