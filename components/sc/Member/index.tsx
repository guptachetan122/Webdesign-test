import { Avatar, Typography, Card, Row, Col, Modal } from "antd";
import React, { useState } from "react";
import styles from "./Member.module.css";
import ScModal from "../../common/Modal/ScModal";
import ButtonLight from "../../common/ButtonComponent/ButtonLight";
const { Text } = Typography;

const Member = ({pageName = ""}) => {


  return (
    <>
      <Card className={styles.Container}>
        <Row>
          <Col span={3} className={styles.AvatarCol}>
            {" "}
            <Avatar
              className={styles.Avatar}
              src={"/assets/images/Ragini.png"}
            />
          </Col>
          <Col span={12} className={styles.MiddleCol}>
            <Row>
              <Text className={styles.Name}>ragini das</Text>
            </Row>
            <Row>
              <Text className={styles.Description}>
                in-house counsel looking for new opportunities
              </Text>
            </Row>
          </Col>
          <Col span={8} className={styles.ButtonCol}>
            {pageName == "chats" ? (
              <ButtonLight name="reply" />
            ) : pageName == "mysc" ? (
              <ButtonLight name="chat" />
            ) : (
              <ScModal />
            )}
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default Member;
