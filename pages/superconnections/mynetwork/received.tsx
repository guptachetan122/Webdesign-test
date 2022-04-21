import { Col, Row } from "antd";
import React from "react";
import Member from "../../../components/sc/Member";
import Sidebar from "../../../ui/Sidebar";
import styles from "../../../styles/Superconnections.module.css";
import BackHeader from "../../../components/common/BackHeader";

const RecievedSc = () => {
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
              {" "}
              <BackHeader pageName="mysc"/>
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

export default RecievedSc;
