import { Col, Row } from 'antd';
import React from 'react'
import Sidebar from '../../components/Sidebar';
import Subheader from "../../components/Subheader";
import { clubhouseNavbar } from "../../constants/constants";
import styles from "../../styles/Feed.module.css";

const createdclubhouses = () => {
  return (
    <>
      <div className={styles.Header}>
        <Subheader data={clubhouseNavbar} />
      </div>
      <Row className={styles.Body}>
        <Col
          md={5}
          lg={7}
          style={{
            paddingTop: "3rem",
          }}
          className={styles.sidebarPos}
        >
          <Sidebar data={"clubhouse"} />
        </Col>
        <Col md={14} lg={10}></Col>
        <Col md={5} lg={7}></Col>
      </Row>
    </>
  );
}

export default createdclubhouses