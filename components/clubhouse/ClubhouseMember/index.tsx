import { Avatar, Col, Row, Typography } from 'antd';
import React from 'react'
import styles from './ClubhouseMember.module.css'
const { Text } = Typography;

const ClubhouseMember = () => {
  return (
    <Row className={styles.row2}>
      <Col span={3}>
        {" "}
        <Avatar className={styles.Avatar} src={"/assets/images/Ragini.png"} />
      </Col>
      <Col span={11} className={styles.col}>
        <Text>ragini das</Text>
      </Col>
      <Col span={10}></Col>
    </Row>
  );
}

export default ClubhouseMember