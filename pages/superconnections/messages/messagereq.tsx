import { Col, Row } from 'antd';
import React from 'react'
import Sidebar from '../../../ui/Sidebar';
import styles from "../../../styles/Superconnections.module.css";
import BackDiv from '../../../components/common/BackDiv';

const MessageReq = () => {
  return (
    <>
      <Row className={styles.Body}>
        <Col span={6} className={styles.Sidebar}>
          {" "}
          <Sidebar pageName={"superconnections"} />{" "}
        </Col>
        <Col span={12} className={styles.MiddleCol}>
          <Row>
            <Col span={2}></Col>
            <Col span={20}>
              <BackDiv />
            </Col>
            <Col span={2}></Col>
          </Row>
        </Col>
        <Col span={6}></Col>
      </Row>
    </>
  );
}

export default MessageReq