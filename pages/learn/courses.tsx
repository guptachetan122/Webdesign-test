/* eslint-disable @next/next/no-img-element */

import { Col, Row, Typography } from "antd";
import React from "react";
import Sidebar from "../../components/Layout/Sidebar";
import styles from "../../styles/Learn.module.css";

const { Text } = Typography;

const courses = () => {
  return (
    <>
      <Row className={styles.Body}>
        <Col span={6} className={styles.Sidebar}>
          {" "}
          <Sidebar pageName={"learn"} />{" "}
        </Col>
        <Col span={12} className={styles.MiddleCol}>
          <Row>
            <Col span={2}></Col>
            <Col span={20}>
              {" "}
              <div className={styles.CourseCardStyle}>
                {" "}
                <Row className={styles.CourseImageWrap}><img src="/assets/images/paper-plane.png" alt="course image" className={styles.CourseImage}/></Row>
                <Row className={styles.CourseTitle}>cohort based courses</Row>
                <Row className={styles.CourseSubTitle}>coming soon...</Row>
                <Row className={styles.CourseDescriptionRow}>
                  {" "}
                  <div className={styles.CourseDescription}>
                    {" "}
                    2021 - 8 creators, 100+ learners, avg 9.4⭐ rating
                  </div>
                  <div className={styles.CourseDescription}>
                    2022 - coming back.
                    <span style={{ fontWeight: "500" }}> bigger</span>.
                    <span style={{ fontWeight: "700" }}> bolder</span>.
                  </div>
                </Row>
              </div>
            </Col>
            <Col span={2}></Col>
          </Row>
        </Col>
        <Col span={6}></Col>
      </Row>
    </>
  );
};

export default courses;
