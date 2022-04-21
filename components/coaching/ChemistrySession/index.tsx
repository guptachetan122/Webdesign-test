import { Col, Progress, Row, Typography } from "antd";
import React, { useState } from "react";
import styles from "./ChemistrySession.module.css";
const { Text } = Typography;

const ChemistrySession = ({ chemSessions = 0 }) => {
  const [percent, setPercent] = useState((chemSessions * 100) / 5);
  const [chem, setChem] = useState(chemSessions);

  return (
    <div className={styles.Container}>
      <Row>
        <Col className={styles.MiddleColumn}>
          <div>
            <Progress
              type="circle"
              percent={percent}
              strokeColor="#F42B4D"
              strokeWidth={10}
              className={styles.ProgressStyle}
              format={() => (
                <Text className={styles.ProgressText}>{chem}/5</Text>
              )}
            />
          </div>
          <div>
            <div className={styles.Row}>
              <div className={styles.Title}>free chemistry sessions done</div>
            </div>
            <div className={styles.Row}>
              <div className={styles.SubTitle}>
                book free 15 minute sessions with any coach to match your vibe
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ChemistrySession;
