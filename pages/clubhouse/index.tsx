// Change this page to index.tsx

import { Col, Row, Typography } from "antd";
import Link from "next/link";
import React from "react";
import ClubhouseCard from "../../components/clubhouse/ClubhouseCard";
import ClubhouseModal from "../../components/common/Modal/ClubhouseModal";
import Sidebar from "../../ui/Sidebar";
import styles from "../../styles/ClubHouse.module.css";
import { UserGroupIcon as ChInactive } from "@heroicons/react/outline";
import CreateChModal from "../../components/common/Modal/CreateChModal";

const { Text } = Typography;
const Starred = () => {
  return (
    <>
      {/* <div className={styles.Header}>
        <Subheader SubheaderData={clubhouseNavbar} />
      </div> */}

      <Row className={styles.Body}>
        <Col span={6} className={styles.sidebarPos}>
          <Sidebar pageName={"clubhouse"} />{" "}
        </Col>
        <Col span={12} className={styles.middleCol}>
          <Row>
            <Col span={2}></Col>
            <Col span={20}>
              {" "}
              <Text className={styles.ChTopText}>
                heart your favourite clubhouses to pin them here!
              </Text>
              <ClubhouseCard isJoined isPinned upcomingHuddle />
              <ClubhouseCard isJoined isPinned />
              <ClubhouseCard isJoined isPinned upcomingHuddle />
              <ClubhouseCard isJoined isPinned />
              <ClubhouseCard isJoined isPinned />
              <div className={styles.ChLink}>
                <Link href="/clubhouse/myclubhouses">
                  view all clubhouses that i’m a part of
                </Link>
              </div>
            </Col>
            <Col span={2}></Col>
          </Row>
        </Col>
        <Col span={6}>
          {" "}
          <div className={styles.chButtonWrapper}>
            <button className={styles.ButtonDark}>
              <ChInactive className={styles.SidebarIcon} />
              join a clubhouse
            </button>
          </div>
          <div className={styles.chButtonWrapper}>
            <CreateChModal />
          </div>
          <div className={styles.chButtonWrapper}>
            <ClubhouseModal />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Starred;
