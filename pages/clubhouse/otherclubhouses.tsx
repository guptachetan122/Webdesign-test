import { SearchOutlined } from '@ant-design/icons';
import { Col, Input, Row } from 'antd';
import React, { useState } from 'react'
import ClubhouseCard from '../../components/clubhouse/ClubhouseCard';
import Sidebar from '../../components/Layout/Sidebar';
import styles from "../../styles/Clubhouse.module.css";
import { Tag } from "antd";
import ClubhouseTags from '../../components/clubhouse/ClubhouseTags';
const { CheckableTag } = Tag;

const Otherclubhouses = () => {

  const [ViewAll, SetViewAll] = useState(false);

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
              <ClubhouseTags />
              <Input
                className={styles.ChInput}
                prefix={<SearchOutlined className={styles.ChIcon} />}
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