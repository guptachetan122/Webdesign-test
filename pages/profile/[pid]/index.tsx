import { Card, Carousel, Col, Input, Row, Typography } from "antd";
import React, { useState } from "react";
import Sidebar from "../../../ui/Sidebar";
import styles from "../../../styles/Feed.module.css";
import BackHeader from "../../../components/common/BackHeader";

const { Text } = Typography;

const Profile = () => {
  const [Stay, setStay] = useState(false);
  const handle = () => {
    setStay(!Stay);
  };

  return (
    <>
      <Row className={styles.Body}>
        <Col span={6} className={styles.Sidebar}>
          <Sidebar pageName={"feed"} />{" "}
        </Col>

        <Col span={12} className={styles.MiddleCol}>
          <Row>
            <Col span={2}></Col>
            <Col span={20}>
              <BackHeader />
            </Col>
            <Col span={2}></Col>
          </Row>
        </Col>

        <Col span={6}>{/* <button onClick={handle}>Click</button> */}</Col>
      </Row>
    </>
  );
};

export default Profile;
