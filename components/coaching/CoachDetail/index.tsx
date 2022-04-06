import React, { useState } from "react";
import { LinkedinFilled } from "@ant-design/icons";
import { Avatar, Typography, Card, Row, Col, Modal, Divider, Radio } from "antd";
import ButtonCoach from "../../common/ButtonComponent/ButtonCoach";
import ButtonDark from "../../common/ButtonComponent/ButtonDark";
import ButtonLight from "../../common/ButtonComponent/ButtonLight";
import styles from "./CoachDetail.module.css";

const { Text } = Typography;

const CoachDetail = () => {
  const [isActive , setActive] = useState(false)
  function onSelect() {
    
  }

  return (
    <>
      <div className={styles.Container}>
        <Row className={styles.Row}>
          <Col span={6} className={styles.AvatarCol}>
            {" "}
            <Avatar
              className={styles.Avatar}
              src={"/assets/images/Ragini.png"}
            />
          </Col>
          <Col span={16} className={styles.DetailCol}>
            <Row className={styles.DetailRow}>
              <Text className={styles.Name}>kavita neelakantan</Text>
            </Row>
            <Row className={styles.DetailRow}>
              <Text className={styles.Description}>
                executive coach | women’s leadership and growth
              </Text>
            </Row>
            <Row className={styles.DetailRow}>
              <LinkedinFilled className={styles.Icon} />
            </Row>
          </Col>
        </Row>
        <Row className={styles.Row}>
          <Row>
            <Text className={styles.Title}>about coach</Text>
          </Row>
          <Row>
            <Text className={styles.Description}>
              lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard pecimen book.
              It has survived not only five centuries, but also the leap into
              electronic
            </Text>
          </Row>
        </Row>
        <Row className={styles.Row}>
          <Text className={styles.Title}>top specializations</Text>
        </Row>
        <Row className={styles.Row}>
          <button className={styles.TagButton}>pivot in my career</button>

          <button className={styles.TagButton}>build exec presence</button>
        </Row>
        <Row className={styles.BookRow}>
          <Text className={styles.Title}>book a session</Text>
        </Row>
        <Row className={styles.Row}>
          <ButtonLight name="book a free chemistry session" />
        </Row>
        <Divider style={{ borderWidth: 2, borderColor: "#919191" }}>or</Divider>{" "}
        <div>
          <Row>
            <ButtonCoach num="1" price="5,000" />
          </Row>{" "}
          <Row>
            {" "}
            <ButtonCoach num="3" price="15,000" />
          </Row>
          <Row>
            <ButtonCoach num="5" price="25,000" />
          </Row>
          <Row>
            <ButtonCoach num="10" price="50,000" />
          </Row>
        </div>
        <Row className={styles.BottomRow}>
          <ButtonDark name="book session" />
        </Row>
        <Row className={styles.BottomRow}>
          <Text className={styles.BottomText}>
            price is not inclusive of tax
          </Text>
        </Row>
      </div>
    </>
  );
};

export default CoachDetail;
