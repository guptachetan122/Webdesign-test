// Change this page to index.tsx

import { Col, Row , Typography} from "antd";
import Link from "next/link";
import React from "react";
import ClubhouseCard from "../../components/ClubhouseCard";
import Sidebar from "../../components/Sidebar";
import Subheader from "../../components/Subheader";
import { clubhouseNavbar } from "../../constants/constants";
import styles from "../../styles/ClubHouse.module.css";

const { Text } = Typography;
const starred = () => {
  return (
    <>
      <div className={styles.Header}>
        <Subheader data={clubhouseNavbar} />
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
          <Sidebar data={"clubhouse"} />
        </Col>
        <Col md={14} lg={10}>
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
        <Col md={5} lg={7}></Col>
      </Row>
    </>
  );
};

export default starred;
