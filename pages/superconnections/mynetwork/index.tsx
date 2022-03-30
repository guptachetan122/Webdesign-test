import { Col, Row } from "antd";
import React from "react";
import Member from "../../../components/sc/Member";
import Sidebar from "../../../ui/Sidebar";
import styles from "../../../styles/Superconnections.module.css";

const SentSc = () => {
  return (
    <>
      {/* <div className={styles.Header}>
        {" "}
        <Subheader SubheaderData={mySuperconnectionNavbar} />{" "}
      </div> */}

      <Row className={styles.Body}>
        <Col span={6} className={styles.sidebarPos}>
          {" "}
          <Sidebar pageName={"superconnections"} />{" "}
        </Col>
        <Col span={12} className={styles.middleCol}>
          <Row>
            <Col span={2}></Col>
            <Col span={20}>
              <Member pageName="mysc" />
              <Member pageName="mysc" />
              <Member pageName="mysc" />
              <Member pageName="mysc" />
              <Member pageName="mysc" />
            </Col>
            <Col span={2}></Col>
          </Row>
        </Col>
        <Col span={6}></Col>
      </Row>
    </>
  );
};

export default SentSc;
