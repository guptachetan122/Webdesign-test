import { SearchOutlined } from '@ant-design/icons';
import { Col, Input, Row } from 'antd';
import React, { useState } from 'react'
import ClubhouseCard from '../../components/clubhouse/ClubhouseCard';
import Sidebar from '../../components/Sidebar';
import Subheader from "../../components/Subheader2";
import { clubhouseNavbar } from "../../constants/constants";
import styles from "../../styles/ClubHouse.module.css";
import { Tag } from "antd";
import SearchTagComponent from '../../components/search/SearchTagComponent';
const { CheckableTag } = Tag;

const Otherclubhouses = () => {

  const [ViewAll, SetViewAll] = useState(false);

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
              <SearchTagComponent />
              <Input
                className={styles.ChInput}
                prefix={<SearchOutlined className={styles.iconSize} />}
                placeholder={`  type a clubhouse’s name`}
              />

              <ClubhouseCard badge="public" />
              <ClubhouseCard badge="private" />
              <ClubhouseCard badge="public" />
            </Col>
            <Col span={2}></Col>
          </Row>
        </Col>
        <Col span={6}></Col>
      </Row>
    </>
  );
}

export default Otherclubhouses