import { Card, Carousel, Col, Input, Row, Typography } from "antd";
import React, { useState } from "react";
import Sidebar from "../../components/Layout/Sidebar";
import styles from "../../styles/Feed.module.css";
import FeedInput from "../../components/feed/FeedInput";
import FeedCard from "../../components/feed/FeedCard";

const { Text } = Typography;

const PublicFeed = () => {
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
              <FeedInput />
              <FeedCard />
              <FeedCard isConnect/>
              <FeedCard />
            </Col>
            <Col span={2}></Col>
          </Row>
        </Col>

        <Col span={6}></Col>
      </Row>
    </>
  );
};

export default PublicFeed;
