import { Card, Col, Progress, Row, Typography } from "antd";
import React, { useState } from "react";
import styles from "./ChemistrySession.module.css";
const { Text } = Typography;

const ChemistrySession = ({ chemSessions = 0 }) => {
  const [percent, setPercent] = useState((chemSessions * 100) / 5);
  const [chem, setChem] = useState(chemSessions);

  return (
    <div className={styles.Container}>
      <Row>
        <Col span={6} className={styles.ProgressWrapper}>
          {" "}
          <Progress
            type="circle"
            percent={percent}
            strokeColor="#F42B4D"
            strokeWidth={10}
            format={() => (
              <Text className={styles.ProgressStyle}>{chem}/5</Text>
            )}
          />
        </Col>
        <Col span={18} className={styles.Container2}>
          <Row>
            <Text className={styles.Title}>
              free chemistry sessions done
            </Text>
          </Row>
          <Row>
            <Text className={styles.SubTitle}>
              book free 15 minute sessions with any coach to match your vibe
            </Text>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ChemistrySession;
