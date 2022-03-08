import { SearchOutlined } from '@ant-design/icons';
import { Button, Col, Input, Row } from 'antd';
import React, { useState } from 'react'
import ClubhouseCard from '../../components/ClubhouseCard';
import Sidebar from '../../components/Sidebar';
import Subheader from "../../components/Subheader";
import { clubhouseNavbar } from "../../constants/constants";
import styles from "../../styles/ClubHouse.module.css";
import { Tag } from "antd";
import { tagsData } from '../../constants/constants';
import SearchTags from '../../components/searchTags';
const { CheckableTag } = Tag;

const Otherclubhouses = () => {

  const [ViewAll, SetViewAll] = useState(false);

  return (
    <>
      <div className={styles.Header}>
        <Subheader data={clubhouseNavbar} />
      </div>
      <Row className={styles.Body}>
        <Col
          md={5}
          lg={7}
          xxl={7}
          style={{
            paddingTop: "3rem",
          }}
          className={styles.sidebarPos}
        >
          <Sidebar data={"clubhouse2"} />
        </Col>
        <Col md={14} lg={10} xl={10} xxl={10}>
          <SearchTags/>
          <Input
            className={styles.ChInput}
            prefix={<SearchOutlined className={styles.iconSize} />}
            placeholder={`  type a clubhouse’s name`}
          />

          <ClubhouseCard />
          <ClubhouseCard />
          <ClubhouseCard/>
        </Col>
        <Col md={5} lg={7}></Col>
      </Row>
    </>
  );
}

export default Otherclubhouses