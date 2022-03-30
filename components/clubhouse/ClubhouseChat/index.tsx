import { Avatar, Col, Row } from "antd";
import { useRouter } from "next/router";
import React from "react";
import styles from "./ClubhouseChat.module.css";

const ClubhouseChat = () => {
  const Router = useRouter();
  const { chid } = Router.query;
  return (
    <>
      <div>ClubhouseChat for clubhouse : {chid}</div>
      <div className={styles.container}>
        <Row>
          <Col span={2} className={styles.col3}>
            {" "}
            <Avatar
              className={styles.Avatar}
              src={"/assets/images/Ragini.png"}
            />
          </Col>
          <Col span={22} className={styles.container2}> hello </Col>
        </Row>
              <Row>
                  <Col></Col>
                  <Col></Col>
        </Row>
      </div>
    </>
  );
};

export default ClubhouseChat;
