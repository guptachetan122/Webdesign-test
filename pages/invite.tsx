import { ShareAltOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Card, Carousel, Col, Input, Progress, Row, Typography } from "antd";
import React, { useState } from "react";
import BackHeader from "../components/common/BackHeader";
import styles from "../styles/Invite.module.css";
import Sidebar from "../components/Layout/Sidebar";

const { Text } = Typography;

const Invite = ({ referrals = 3 }) => {
  const [percent, setPercent] = useState(60);
  const [chem, setChem] = useState(3);

  const [Stay, setStay] = useState(false);
  const handle = () => {
    setStay(!Stay);
  };

  return (
    <>
      <Row className={styles.Body}>
        <Col span={6} className={styles.Sidebar}>
          <Sidebar pageName="" />
        </Col>

        <Col span={12} className={styles.MiddleCol}>
          <Row>
            <Col span={2}></Col>
            <Col span={20}>
              <BackHeader />
              <Card className={styles.Card}>
                <div className={styles.Title}>now you decide who joins 👑</div>
                <div className={styles.subTitle}>
                  thank you for building leap.club with us, you can now invite
                  your friends or co-workers who will benefit from the leap/club
                  network.
                </div>
                <div className={styles.subTitle}>
                  your invites skip the waitlist and can become direct members.
                  you can choose to whatsapp us their contact details (name and
                  number - just share the contact from your phone book and we
                  will share more info with them and take it from there) or you
                  can share a direct link with them to make the payment.
                </div>
              </Card>
              <Card className={styles.Card}>
                <Row>
                  <Col span={24} className={styles.CardColumn}>
                    <div className={styles.ProgressWrapper}>
                      <div>
                        <Progress
                          type="circle"
                          percent={percent}
                          strokeColor="#F42B4D"
                          strokeWidth={10}
                          className={styles.ProgressStyle}
                          format={() => (
                            <Text className={styles.ProgressText}>
                              {chem}/5
                            </Text>
                          )}
                        />
                        <div>referrals used</div>
                      </div>
                    </div>
                    <div className={styles.ButtonWrapper}>
                      <div>
                        <div className={styles.Button}>
                          <WhatsAppOutlined className={styles.Icon} />
                          share contact with us
                        </div>
                        <div className={styles.Button}>
                          <ShareAltOutlined className={styles.ShareIcon} />
                          copy invitation link
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={2}></Col>
          </Row>
        </Col>

        <Col span={6}></Col>
      </Row>
    </>
  );
};

export default Invite;
