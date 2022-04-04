import { Card, Col, Row } from "antd";
import React from "react";
import Sidebar from "../../ui/Sidebar";
import styles from "../../styles/Learn.module.css";

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
              <Card className={styles.CourseCardStyle}>
                {" "}
                <div className={styles.CourseTitle}>cohort based courses</div>
                <div className={styles.CourseSubTitle}>
                  coming soon - we hosted 8 creators and sold 100+ seats in
                  2021. these courses were rated 9+ by our members. we are
                  excited to relaunch courses in 2022. bigger. bolder.
                </div>
              </Card>
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
