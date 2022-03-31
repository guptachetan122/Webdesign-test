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
      <Col span={12} className={styles.col}>
        <Row>
          <Text className={styles.MemberName}>ragini das</Text>
        </Row>
        <Row>
          <Text className={styles.MemberDescription}>
            in-house counsel looking for new opportunities
          </Text>
        </Row>
      </Col>
      <Col span={8}></Col>
    </Row>
  );
}

export default ClubhouseMember