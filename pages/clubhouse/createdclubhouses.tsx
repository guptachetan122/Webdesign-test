import { Col, Row } from 'antd';
import React from 'react'
import Sidebar from '../../ui/Sidebar';
import Subheader from "../../ui/Subheader2";
import { clubhouseNavbar } from "../../constants/constants";
import styles from "../../styles/ClubHouse.module.css";

const createdclubhouses = () => {
  return (
    <>
      <Row className={styles.Body}>
        <Col span={6} className={styles.Sidebar}>
          <Sidebar pageName={"clubhouse"} />
        </Col>
        <Col span={12} className={styles.MiddleCol}>
          <Row>
            <Col span={2}></Col>
            <Col span={20}></Col>
            <Col span={2}></Col>
          </Row>
        </Col>
        <Col span={6}></Col>
      </Row>
    </>
  );
}

export default createdclubhouses