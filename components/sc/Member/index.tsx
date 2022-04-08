import { Avatar, Typography, Card, Row, Col } from "antd";
import React from "react";
import styles from "./Member.module.css";
import ScModal from "../../common/Modal/ScModal";
import ButtonLight from "../../common/ButtonComponent/ButtonLight";
const { Text } = Typography;

const Member = ({pageName = ""}) => {


  return (
    <>
      <div className={styles.Container}>
        <Row>
          <Col span={3} className={styles.AvatarCol}>
            {" "}
            <Avatar
              className={styles.Avatar}
              src={"/assets/images/Ragini.png"}
            />
          </Col>
          <Col span={1}></Col>
          <Col span={10} className={styles.MiddleCol}>
            <Row>
              <div className={styles.Name}>ragini das</div>
            </Row>
            <Row>
              <div className={styles.Description}>
                in-house counsel looking for new opportunities
              </div>
            </Row>
          </Col>
          <Col span={1}></Col>
          <Col span={9} className={styles.ButtonCol}>
            {pageName == "chats" ? (
              <ButtonLight name="reply" />
            ) : pageName == "mysc" ? (
              <ButtonLight name="chat" />
            ) : (
              <ScModal />
            )}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Member;
