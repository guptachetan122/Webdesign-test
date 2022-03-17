// Change this page to index.tsx

import { Col, Layout, Row } from "antd";
import React from "react";
import ExperienceCard from "../../components/ExperienceCard";
import ExpTags from "../../components/ExpTags";
import Sidebar from "../../components/Sidebar";
import Subheader from "../../components/Subheader2";
import { experiencesNavbar } from "../../constants/constants";
import styles from "../../styles/Experience.module.css";

const Upcoming = () => {
  return (
    <>
      <div className={styles.Header}>
        {" "}
        <Subheader SubheaderData={experiencesNavbar} />{" "}
      </div>
      <Row className={styles.Body}>
        <Col span={6} className={styles.sidebarPos}>
          {" "}
          <Sidebar pageName={"experiences"} />{" "}
        </Col>
        <Col span={12} className={styles.middleCol}>
          <Row>
            <Col span={2}></Col>{" "}
            <Col span={20}>
              {" "}
              <ExpTags />
            </Col>
            <Col span={2}></Col>
          </Row>
          <Row>
            <Col span={6}></Col>
            <Col span={12}>
              <div style={{}}>
                <ExperienceCard viewMore />
                <ExperienceCard viewMore />
                <ExperienceCard viewMore />
              </div>
            </Col>
            <Col span={6}></Col>
          </Row>
        </Col>
        <Col span={6}></Col>
      </Row>
    </>
  );
};

export default Upcoming;
