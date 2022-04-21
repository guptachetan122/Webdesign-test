// Change this page to index.tsx

import { Col, Layout, Row } from "antd";
import React from "react";
import ExperienceCard from "../../components/experience/UpcomingExperienceCard";
import ExperienceTags from "../../components/experience/ExperienceTags";
import Sidebar from "../../ui/Sidebar";
import styles from "../../styles/Experience.module.css";

const Upcoming = () => {
  return (
    <>
      <Row className={styles.Body}>
        <Col span={6} className={styles.Sidebar}>
          {" "}
          <Sidebar pageName={"experiences"} />{" "}
        </Col>
        <Col span={12} className={styles.MiddleCol}>
          <Row className={styles.TagRow}>
            <Col span={4}></Col>{" "}
            <Col span={16}>
              {" "}
              <ExperienceTags />
            </Col>
            <Col span={4}></Col>
          </Row>
          <Row>
            <Col span={4}></Col>
            <Col span={15}>
              <div>
                <ExperienceCard viewMore Name="online" />
                <ExperienceCard viewMore isBooked />
                <ExperienceCard viewMore isPay />
                <ExperienceCard viewMore isPay Name="online" />
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

export default Upcoming;
