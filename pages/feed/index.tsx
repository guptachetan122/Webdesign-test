import { Card, Col, Row, Typography } from "antd";
import React, { useState } from "react";
import ExperienceCard from "../../components/experience/ExperienceCard";
import Sidebar from "../../components/Sidebar";
import Subheader from "../../components/Subheader2";
import { feedNavbar } from "../../constants/constants";
import styles from "../../styles/Feed.module.css";
import { useFetchPostsQuery } from "../../components/feed/Posts/PostsApi";
import { SafetyCertificateTwoTone } from "@ant-design/icons";

const { Text } = Typography;

const PublicFeed = () => {
  const { data, isSuccess, isFetching } = useFetchPostsQuery();
  const [Stay, setStay] = useState(false);
  const handle = () => {
    setStay(!Stay);
  };
  return (
    <>
      {/* <div className={styles.Header}>
        <Subheader SubheaderData={feedNavbar} />
      </div> */}
      <Row className={styles.Body}>
        <Col span={6} className={styles.sidebarPos}>
              <Sidebar pageName={"feed"} />{" "}
        </Col>

        <Col span={12} className={styles.middleCol}>
          <Row>
            <Col span={2}></Col>
            <Col span={20}>
              <h1>FEED UI</h1>
              {data && Stay
                ? data.map((val) => {
                    console.log(val.id);
                    console.log(val.email);
                    return (
                      <Card key={val.id}>
                        <Text>My name is </Text>
                        <Text>{val.name}</Text>
                      </Card>
                    );
                  })
                : console.log("logg")}
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
