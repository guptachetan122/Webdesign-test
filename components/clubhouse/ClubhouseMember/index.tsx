import { Avatar, Col, Row, Typography } from 'antd';
import React from 'react'
import styles from './ClubhouseMember.module.css'
const { Text } = Typography;

const ClubhouseMember = () => {
  return (
    <Row className={styles.Container}>
      <Col span={20} className={styles.DetailColumn}>
        <div>
          <Avatar className={styles.Avatar} src={"/assets/images/Ragini.png"} />
        </div>
        <div>
          <div className={styles.DetailWrapper}>
            <div className={styles.Name}>ragini das</div>
          </div>
          <div className={styles.DetailWrapper}>
            <div className={styles.Description}>
              in-house counsel looking for new opportunities
            </div>
          </div>
        </div>
      </Col>
      <Col span={4}></Col>
    </Row>
  );
}

export default ClubhouseMember