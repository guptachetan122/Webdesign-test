import { Card, Col, Row, Typography } from "antd";
import React, { useState } from "react";
import Sidebar from "../../ui/Sidebar";
import styles from "../../styles/Feed.module.css";
import { useFetchPostsQuery } from "../../components/feed/Posts/PostsApi";

const { Text } = Typography;

const PublicFeed = () => {
  const { data, isSuccess, isFetching } = useFetchPostsQuery();
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
              <h1>FEED UI</h1>
              {data && Stay
                ? data.map((val) => {
                    return (
                      <Card key={val.id}>
                        <Text>My name is </Text>
                        <Text>{val.name}</Text>
                      </Card>
                    );
                  })
                : null}
            </Col>
            <Col span={2}></Col>
          </Row>
        </Col>

        <Col span={6}>
          <button onClick={handle}>Click</button>
        </Col>
      </Row>
    </>
  );
};

export default PublicFeed;
