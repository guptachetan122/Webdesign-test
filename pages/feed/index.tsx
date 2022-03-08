import { Card, Col, Row, Typography } from "antd";
import React, { useState } from "react";
import ExperienceCard from "../../components/ExperienceCard";
import Sidebar from "../../components/Sidebar";
import Subheader from "../../components/Subheader";
import { feedNavbar } from "../../constants/constants";
import styles from "../../styles/Feed.module.css";
import { useFetchPostsQuery } from "../../components/Posts/PostsApi";
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
      <div className={styles.Header}>
        <Subheader data={feedNavbar} />
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
          <Sidebar data={"feed"} />
        </Col>

        <Col md={14} lg={10}>
          <h1>HELLO</h1>
          {data && Stay
            ? data.map((val) => {
                console.log(val.id);
                console.log(val.email);
                return (
                  <Card key={val.id}>
                    <Text>I was HERE</Text>
                    <Text>{val.name}</Text>
                  </Card>
                );
              })
            : console.log("logg")}
        </Col>

        <Col md={5} lg={7}>
          <button onClick={handle}>Click</button>
        </Col>
      </Row>
    </>
  );
};

export default PublicFeed;
