import { SearchOutlined } from "@ant-design/icons";
import { Col, Input, Row } from "antd";
import React from "react";
import ClubhouseCard from "../../components/clubhouse/ClubhouseCard";
import ClubhouseModal from "../../components/common/Modal/ClubhouseModal";
import CreateChModal from "../../components/common/Modal/CreateChModal";
import Sidebar from "../../ui/Sidebar";
import Subheader from "../../ui/Subheader2";
import { clubhouseNavbar } from "../../constants/constants";
import styles from "../../styles/ClubHouse.module.css";
import { UserGroupIcon as ChInactive } from "@heroicons/react/outline";
import Link from "next/link";

const myclubhouses = () => {
  return (
    <>
      <Row className={styles.Body}>
        <Col span={6} className={styles.Sidebar}>
          <Sidebar pageName={"clubhouse"} />
        </Col>
        <Col span={12} className={styles.MiddleCol}>
          <Row>
            <Col span={2}></Col>
            <Col span={20}>
              {" "}
              <Input
                className={styles.ChInput}
                prefix={<SearchOutlined className={styles.ChIcon} />}
                placeholder={`  type a clubhouse’s name`}
              />
              <ClubhouseCard isJoined upcomingHuddle isFounder/>
              <ClubhouseCard isJoined />
              <ClubhouseCard isJoined upcomingHuddle />
              <ClubhouseCard isJoined isFounder/>
              <ClubhouseCard isJoined upcomingHuddle />
              <ClubhouseCard isJoined />
            </Col>
            <Col span={2}></Col>
          </Row>
        </Col>
        <Col span={6} className={styles.SidebarButton}>
          <div className={styles.ChButtonDiv}>
            <div className={styles.ChButtonWrapper}>
              <Link href="/clubhouse/otherclubhouses" passHref>
                <button className={styles.ButtonDark}>
                  <ChInactive className={styles.ButtonIcon} />
                  join a clubhouse
                </button>
              </Link>
            </div>
            <div className={styles.ChButtonWrapper}>
              <CreateChModal />
            </div>
            <div className={styles.ChButtonWrapper}>
              <ClubhouseModal />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default myclubhouses;
