import { Col, Row } from "antd";
import React from "react";
import Sidebar from "../../../components/Layout/Sidebar";
import styles from "../../../styles/Learn.module.css";
import CoachDetail from "../../../components/coaching/CoachDetail";
import BackHeader from "../../../components/common/BackHeader";

const CoachDetailPage = () => {
  return (
    <>
      <Row className={styles.Body}>
        <Col span={6} className={styles.Sidebar}>
          {" "}
          <Sidebar pageName={"learn"} />{" "}
        </Col>
        <Col span={12}>
          <Row>
            <Col span={4}></Col>
            <Col span={16}>
              <BackHeader />
              <CoachDetail />
            </Col>
            <Col span={2}></Col>
          </Row>
        </Col>
        <Col span={4}></Col>
      </Row>
    </>
  );
};

export default CoachDetailPage;

// export default CoachDetailPage;
