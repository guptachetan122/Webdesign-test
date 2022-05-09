// this page is Recommendations.tsx
import React from "react";
import styles from "../../styles/Superconnections.module.css";
import { Col, Input, Row, Switch } from "antd";
import Sidebar from "../../ui/Sidebar";
import { SearchOutlined } from "@ant-design/icons";
import Link from "next/link";
import Head from "next/head";
import MemberCollapse from "../../components/sc/MemberCollapse";

const Recommendations = () => {
  function onChange() {
    console.log("clicked");
  }

  return (
    <>
      <Head>
        <meta
          property="og:image"
          content="https://leap.club/careers-page-final-thumbnail.jpg"
        />
      </Head>
      <Row className={styles.Body}>
        <Col span={6} className={styles.Sidebar}>
          <Sidebar pageName={"superconnections"} />
        </Col>
        <Col span={12} className={styles.MiddleCol}>
          <Row>
            <Col span={2}></Col>
            <Col span={20}>
              {" "}
              <Row className={styles.ContentRow}>
                <Input
                  className={styles.ScInput}
                  prefix={<SearchOutlined className={styles.ScIconSize} />}
                  placeholder={`  search member's`}
                />
              </Row>
              <Row className={styles.ContentRow}>
                <Link href="/superconnections/messages/messagereq" passHref>
                  <button className={styles.ScButtonDark}>
                    5 message requests
                  </button>
                </Link>
                <Link href="/superconnections/mynetwork" passHref>
                  <button className={styles.ScButton}>
                    94 superconnections
                  </button>
                </Link>
              </Row>
              <MemberCollapse />
            </Col>
            <Col span={2}></Col>
          </Row>
        </Col>
        <Col span={6} className={styles.ThirdCol}>
          {" "}
          <div className={styles.ScCard}>
            <Row>
              <Col span={20}>receive messages from other members </Col>
              <Col span={4}>
                {" "}
                <Switch
                  defaultChecked
                  onChange={onChange}
                />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Recommendations;
