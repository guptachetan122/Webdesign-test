import React, { useState } from "react";
import { LinkedinFilled } from "@ant-design/icons";
import { Avatar, Typography, Card, Row, Col, Modal, Divider } from "antd";
import ButtonCoach from "../../common/ButtonComponent/ButtonCoach";
import ButtonDark from "../../common/ButtonComponent/ButtonDark";
import ButtonLight from "../../common/ButtonComponent/ButtonLight";
import styles from "./CoachDetail.module.css";

const { Text } = Typography;

const CoachDetail = () => {
  return (
    <>
      <div className={styles.CoachCardContainer}>
        <Row className={styles.CoachCardRow}>
          <Col span={4} className={styles.CoachCardAvatarCol}>
            {" "}
            <Avatar
              className={styles.CoachCardAvatar}
              src={"/assets/images/Ragini.png"}
            />
          </Col>
          <Col span={18} className={styles.CoachCardMiddleCol}>
            <Row className={styles.CoachCardDetailRow}>
              <Text className={styles.CoachCardName}>kavita neelakantan</Text>
            </Row>
            <Row className={styles.CoachCardDetailRow}>
              <Text className={styles.CoachCardDescription}>
                executive coach | women’s leadership and growth
              </Text>
            </Row>
            <Row className={styles.CoachCardDetailRow}>
              <LinkedinFilled className={styles.CoachCardIcon} />
            </Row>
          </Col>
        </Row>
        <Row className={styles.CoachCardRow}>
          <Row>
            <Text className={styles.CoachDetailTitle}>about coach</Text>
          </Row>
          <Row>
            <Text className={styles.CoachCardDescription}>
              lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard pecimen book.
              It has survived not only five centuries, but also the leap into
              electronic
            </Text>
          </Row>
        </Row>

        <Row className={styles.CoachCardRow}>
          <Text className={styles.CoachDetailTitle}>top specializations</Text>
        </Row>
        <Row className={styles.CoachCardRow}>
          <button className={styles.CoachDetailTagButton}>
            pivot in my career
          </button>

          <button className={styles.CoachDetailTagButton}>
            build exec presence
          </button>
        </Row>

        <Row className={styles.CoachBookRow}>
          <Text className={styles.CoachDetailTitle}>book a session</Text>
        </Row>
        <Row className={styles.CoachCardRow}>
          <ButtonLight name="book a free chemistry session" />
        </Row>

        <Divider style={{ borderWidth: 2, borderColor: "#919191" }}>or</Divider>

        <Row>
          {" "}
          <ButtonCoach num="1" price="5,000"></ButtonCoach>
          <ButtonCoach num="3" price="15,000" isActive></ButtonCoach>
          <ButtonCoach num="5" price="25,000"></ButtonCoach>
          <ButtonCoach num="10" price="50,000"></ButtonCoach>
        </Row>

        <Row className={styles.CoachDetailBottom}>
          <ButtonDark name="book session" />
        </Row>
        <Row className={styles.CoachDetailBottom}>
          <Text className={styles.CoachDetailBottomText}>
            price is not inclusive of tax
          </Text>
        </Row>
      </div>
    </>
  );
};

export default CoachDetail;
