import { SearchOutlined } from '@ant-design/icons';
import { Col, Input, Row } from 'antd';
import React from 'react'
import ClubhouseCard from '../../components/ClubhouseCard';
import Sidebar from '../../components/Sidebar';
import Subheader from "../../components/Subheader";
import { clubhouseNavbar } from "../../constants/constants";
import styles from "../../styles/ClubHouse.module.css";

const myclubhouses = () => {
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
          <Input
            className={styles.ChInput}
            prefix={<SearchOutlined className={styles.iconSize} />}
            placeholder={`  type a clubhouse’s name`}
          />
          <ClubhouseCard isJoined />
          <ClubhouseCard isJoined />
          <ClubhouseCard isJoined />
          <ClubhouseCard isJoined />
          <ClubhouseCard isJoined />
          <ClubhouseCard isJoined />
        </Col>
        <Col md={5} lg={7}></Col>
      </Row>
    </>
  );
}

export default myclubhouses