import { Col, Row } from 'antd';
import React from 'react'
import Sidebar from '../../components/Sidebar';
import Subheader from '../../components/Subheader';
import { mySuperconnectionNavbar } from '../../constants/constants';
import styles from '../../styles/Feed.module.css'

const mysc = () => {
  return (
    <>
      <div className={styles.Header}>
        {" "}
        <Subheader data={mySuperconnectionNavbar} />{" "}
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
          {" "}
          <Sidebar data={"superconnections"} />{" "}
        </Col>
        <Col md={14} lg={10}></Col>
        <Col md={5} lg={7}></Col>
      </Row>
    </>
  );
}

export default mysc