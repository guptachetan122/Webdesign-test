import { Avatar, Typography, Card, Row, Col, Modal } from "antd";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./Member.module.css";
import TextArea from "antd/lib/input/TextArea";
import ScModal from "../Modal/ScModal";
import ButtonComponent from "../ButtonComponent";
const { Text } = Typography;

const Member = ({pageName = ""}) => {


  return (
    <>
      <Card className={styles.MemberContainer}>
        <Row>
          <Col span={3} className={styles.MemberAvatarCol}>
            {" "}
            <Avatar
              className={styles.MemberAvatar}
              src={"/assets/images/Ragini.png"}
            />
          </Col>
          <Col span={12} className={styles.MemberMiddleCol}>
            <Row>
              <Text className={styles.MemberName}>ragini das</Text>
            </Row>
            <Row>
              <Text className={styles.MemberDescription}>
                in-house counsel looking for new opportunities
              </Text>
            </Row>
          </Col>
          <Col span={8}>
           <ButtonComponent pageName={pageName}/>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default Member;
