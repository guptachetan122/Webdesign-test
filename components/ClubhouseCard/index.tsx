import { Avatar, Badge, Button, Card, Col, Row, Typography } from "antd";
import React, { useState } from "react";
import styles from "./ClubhouseCard.module.css";
import Image from "next/image";
import Link from "next/link";
import ButtonComponent from "../ButtonComponent";
const { Text } = Typography;

const ClubhouseCard = ({ isJoined = false }) => {
  const [isClicked, SetisClicked] = useState(false);

  function onPress() {
    SetisClicked(!isClicked);
  }
  /* 
    Have Used antd Grid system 
    - divided the card in four row 
    - isJoined is the boolean variable used to change the button component and 
  */
  return (
    <>
      <div className={styles.ChCardcontainer}>
        <Row className={styles.ChCardrow}>
          <Col xs={20} md={20} lg={20} xl={20} xxl={20}>
            <Link href="/clubhouse/id" passHref>
              <a>
                <Text className={styles.ChCardTopContent}>
                  simplifying personal finance for women
                </Text>
              </a>
            </Link>
          </Col>
          <Col
            xs={4}
            md={4}
            lg={4}
            xl={4}
            xxl={4}
            className={styles.ChCardcol2}
          >
            <Image
              src={
                isClicked
                  ? "/assets/images/heartFilled.png"
                  : "/assets/images/heartNotFilled.png"
              }
              alt="isJoined picture"
              width={28}
              height={28}
              onClick={onPress}
            />
          </Col>
        </Row>
        <Link href="/clubhouse/id" passHref>
          <a>
            <Row className={styles.ChCardrow}>
              <Image
                src="/assets/images/ch-inactive.png"
                alt="ch-inactive icon"
                width={35}
                height={20}
              />
              <Text className={styles.ChCardText}>121</Text>
              {isJoined ? null : (
                <Badge className={styles.ChCardBadge}>
                  <Text className={styles.ChCardBadgeText}>public</Text>
                </Badge>
              )}
            </Row>
          </a>
        </Link>
        <Link href="/clubhouse/id" passHref>
          <a>
            <Row className={styles.ChCardrow}>
              <Text className={styles.ChCardDescription}>
                women playing sports, bindass, lorem Ipsum is simply dummy text
                of the printing and typesetting industry. Lorem Ipsum has been
                the industry&apos;s standard du,dummy text of the printing and
                typesetting industry. ...more
              </Text>
            </Row>
          </a>
        </Link>
        <Row className={styles.ChCardrow}>
          <Col xs={6} md={6} lg={5} xl={4} xxl={3}>
            {" "}
            <Avatar
              className={styles.ChCardAvatar}
              src={"/assets/images/Ragini.png"}
            />
          </Col>
          <Col
            xs={8}
            md={8}
            lg={9}
            xl={10}
            xxl={11}
            className={styles.ChCardcol}
          >
            <Text>ragini das</Text>
            {/* {!isFounder ? (
            <Text className={styles.Chtext2}>is a Founder</Text>
          ) : null} */}
          </Col>
          <Col
            xs={10}
            md={10}
            lg={10}
            xl={10}
            xxl={10}
            className={styles.ChCardcol2}
          >
            <ButtonComponent pageName="clubhouse" isJoined/>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ClubhouseCard;
