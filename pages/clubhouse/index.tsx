// Change this page to index.tsx

import { Col, Row, Typography } from "antd";
import Link from "next/link";
import React from "react";
import ClubhouseCard from "../../components/ClubhouseCard";
import Sidebar from "../../components/Sidebar";
import Subheader from "../../components/Subheader2";
import { clubhouseNavbar } from "../../constants/constants";
import styles from "../../styles/ClubHouse.module.css";

const { Text } = Typography;
const Starred = () => {
  return (
    <>
      <div className={styles.Header}>
        <Subheader SubheaderData={clubhouseNavbar} />
      </div>

      <Row className={styles.Body}>
        <Col span={6} className={styles.sidebarPos}>
          <Sidebar pageName={"clubhouse"} />
        </Col>
        <Col span={12} className={styles.middleCol}>
          <Row>
            <Col span={2}></Col>
            <Col span={20}>
              {" "}
              <Text className={styles.ChTopText}>
                heart your favourite clubhouses to pin them here!
              </Text>
              <ClubhouseCard isJoined />
              <ClubhouseCard isJoined />
              <ClubhouseCard isJoined />
              <div className={styles.ChLink}>
                <Link href="/clubhouse/myclubhouses">
                  view all clubhouses that i’m a part of
                </Link>
              </div>
            </Col>
            <Col span={2}></Col>
          </Row>
        </Col>
        <Col span={6}></Col>
      </Row>
    </>
  );
};

export default Starred;
