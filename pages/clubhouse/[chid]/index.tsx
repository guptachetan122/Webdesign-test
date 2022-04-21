import { useRouter } from "next/router";
import { Col, Row, Typography } from "antd";
import React from "react";
import Sidebar from "../../../ui/Sidebar";
import styles from "../../../styles/Clubhouse.module.css";
import ClubhouseDetail from "../../../components/clubhouse/ClubhouseDetail";
import BackHeader from "../../../components/common/BackHeader";

const { Text } = Typography;

const ClubhouseDetailPage = () => {
  const Router = useRouter();
  const { chid } = Router.query;
  return (
    <>
      <Row className={styles.Body}>
        <Col span={6} className={styles.Sidebar}>
          <Sidebar pageName={"clubhouse2"} />
        </Col>
        <Col span={12}>
          <Row>
            <Col span={2}></Col>
            <Col span={20}>
              <BackHeader />
              <ClubhouseDetail isJoined/>
            </Col>
            <Col span={2}></Col>
          </Row>
        </Col>
        <Col span={6}></Col>
      </Row>
    </>
  );
};

export default ClubhouseDetailPage;
