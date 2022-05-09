import { Avatar, Typography, Card, Row, Col } from "antd";
import React from "react";
import styles from "./Member.module.css";
import ScModal from "../../common/Modal/ScModal";
import ButtonLight from "../../common/Button/ButtonLight";
const { Text } = Typography;

const Member = ({pageName = ""}) => {


  return (
    <>
      <Row className={styles.Container}>
        <Col span={14} className={styles.DetailColumn}>
          <div>
            <Avatar
              className={styles.Avatar}
              src={"/assets/images/Ragini.png"}
            />
          </div>
          <div className={styles.DetailWrapper}>
            <div>
              <div className={styles.Name}>ragini das</div>
              <div className={styles.Description}>
                in-house counsel looking for new opportunities
              </div>
            </div>
          </div>
        </Col>
        <Col span={1}></Col>
        <Col span={9} className={styles.ButtonColumn}>
          {pageName == "chats" ? (
            <ButtonLight name="reply" />
          ) : pageName == "mysc" ? (
            <ButtonLight name="chat" />
          ) : pageName == "likeChat" ? (
            <ButtonLight name="chat" onlyIcon />
          ) : pageName == "likeSc" ? (
            <ScModal onlyIcon/>
          ) : (
            <ScModal />
          )}
        </Col>
      </Row>
    </>
  );
};

export default Member;
