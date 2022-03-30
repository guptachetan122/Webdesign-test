import { SearchOutlined } from "@ant-design/icons";
import { Col, Input, Row } from "antd";
import React from "react";
import ClubhouseCard from "../../components/clubhouse/ClubhouseCard";
import ClubhouseModal from "../../components/common/Modal/ClubhouseModal";
import CreateChModal from "../../components/common/Modal/CreateChModal";
import Sidebar from "../../components/Sidebar";
import Subheader from "../../components/Subheader2";
import { clubhouseNavbar } from "../../constants/constants";
import styles from "../../styles/ClubHouse.module.css";
import { UserGroupIcon as ChInactive } from "@heroicons/react/outline";

const myclubhouses = () => {
  return (
    <>
      {/* <div className={styles.Header}>
        <Subheader SubheaderData={clubhouseNavbar} />
      </div> */}
      <Row className={styles.Body}>
        <Col span={6} className={styles.sidebarPos}>
          <Sidebar pageName={"clubhouse"} />
        </Col>
        <Col span={12} className={styles.middleCol}>
          <Row>
            <Col span={2}></Col>
            <Col span={20}>
              {" "}
              <Input
                className={styles.ChInput}
                prefix={<SearchOutlined className={styles.iconSize} />}
                placeholder={`  type a clubhouse’s name`}
              />
              <ClubhouseCard isJoined upcomingHuddle />
              <ClubhouseCard isJoined />
              <ClubhouseCard isJoined upcomingHuddle />
              <ClubhouseCard isJoined />
              <ClubhouseCard isJoined upcomingHuddle />
              <ClubhouseCard isJoined />
            </Col>
            <Col span={2}></Col>
          </Row>
        </Col>
        <Col span={6}>
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

export default myclubhouses;
