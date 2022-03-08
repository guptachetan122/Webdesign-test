import { useRouter } from "next/router";
import { Col, Input, Row, Typography } from "antd";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import ClubhouseCard from "../../../components/ClubhouseCard";
import Sidebar from "../../../components/Sidebar";
import { clubhouseNavbar } from "../../../constants/constants";
import styles from "../../../styles/ClubHouse.module.css";
import { SearchOutlined } from "@ant-design/icons";
import ClubhouseCardInfo from "../../../components/ClubhouseCardInfo";

const { Text } = Typography;

const ClubhouseInfo = () => {
  const Router = useRouter();
  const { chid } = Router.query;
  return (
    <>
      <Row className={styles.Body2}>
        <Col
          md={5}
          lg={7}
          style={{
            paddingTop: "3rem",
          }}
          className={styles.sidebarPos}
        >
          <Sidebar data={"clubhouse2"} />
        </Col>
        <Col md={14} lg={10}>
          <div className={styles.backDiv}>
            <Image
              src="/assets/images/back.png"
              alt="profile picture"
              width={35}
              height={35}
            />
            <Text className={styles.backDivText}> clubhouse info</Text>
          </div>
          <Input
            className={styles.ChInput}
            prefix={<SearchOutlined className={styles.iconSize} />}
            placeholder={`  type a clubhouse’s name`}
          />
          <ClubhouseCardInfo />
        </Col>
        <Col md={5} lg={7}></Col>
      </Row>
    </>
  );
};

export default ClubhouseInfo;
