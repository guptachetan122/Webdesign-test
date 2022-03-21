import { Col, Row } from "antd";
import React from "react";
import Member from "../../../components/Member";
import Sidebar from "../../../components/Sidebar";
import styles from "../../../styles/superconnections.module.css";

const RecievedSc = () => {
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
              {" "}
              <Member pageName="my network" />
              <Member pageName="my network" />
              <Member pageName="my network" />
              <Member pageName="my network" />
              <Member pageName="my network" />
            </Col>
            <Col span={2}></Col>
          </Row>
        </Col>
        <Col span={6}></Col>
      </Row>
    </>
  );
};

export default RecievedSc;
