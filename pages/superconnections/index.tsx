// this page is Recommendations.tsx
import React from "react";
import { superconnectionNavbar } from "../../constants/constants";
import styles from "../../styles/Superconnections.module.css";
import Subheader from "../../ui/Subheader2";
import { Card, Col, Input, Row, Switch } from "antd";
import Sidebar from "../../ui/Sidebar";
import MemberRecommendations from "../../components/sc/MemberRecommendation";
import { SearchOutlined } from "@ant-design/icons";
import Link from "next/link";
import Head from "next/head";

const Recommendations = () => {

  function onChange() {
    console.log('clicked')
  }

  return (
    <>
      <Head>
        <meta
          property="og:image"
          content="https://leap.club/careers-page-final-thumbnail.jpg"
        />
      </Head>
      {/* <div className={styles.Header}>
        {" "}
        <Subheader SubheaderData={superconnectionNavbar} />{" "}
      </div> */}
      <Row className={styles.Body}>
        <Col span={6} className={styles.sidebarPos}>
          <Sidebar pageName={"superconnections"} />
        </Col>
        <Col span={12} className={styles.middleCol}>
          <Row>
            <Col span={2}></Col>
            <Col span={20}>
              {" "}
              <Row>
                <Input
                  className={styles.ScInput}
                  prefix={<SearchOutlined className={styles.ScIconSize} />}
                  placeholder={`  search member's`}
                />
              </Row>
              <Row>
                <Link href="/superconnections/messages/messagereq" passHref>
                  <button className={styles.ScButton}>
                    5 message requests
                  </button>
                </Link>
                <Link href="/superconnections/mynetwork" passHref>
                  <button className={styles.ScButton}>
                    94 superconnections
                  </button>
                </Link>
              </Row>
              <Card className={styles.ScCard}>
                <Row>
                  <Col span={22}>receive messages from other members </Col>
                  <Col span={2}>
                    {" "}
                    <Switch defaultChecked onChange={onChange} />
                  </Col>
                </Row>
              </Card>
              <MemberRecommendations
                title="trending members 🔥"
                subTitle="super active members. not all heroes wear capes."
              />
              <MemberRecommendations
                title="members from your city 📍"
                subTitle="for all those social meetups."
              />
              <MemberRecommendations
                title="members from your organization 💼"
                subTitle="no office, no problem. say hi on leap!"
              />
              <MemberRecommendations
                title="recent members to superconnect with 🆕"
                subTitle="make the freshers feel welcome!."
              />
              <MemberRecommendations
                title="members to reconnect with 🕯️"
                subTitle="rekindle the old love."
              />
            </Col>
            <Col span={2}></Col>
          </Row>
        </Col>
        <Col span={6}></Col>
      </Row>
    </>
  );
}

export default Recommendations;
