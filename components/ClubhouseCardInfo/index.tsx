import { Avatar, Badge, Button, Card, Col, Row, Typography } from "antd";
import React, { useState } from "react";
import styles from "./ClubhouseCardInfo.module.css";
import Image from "next/image";
import Link from "next/link";
import ButtonComponent from "../ButtonComponent";
const { Text } = Typography;

const ClubhouseCardInfo = ({ isJoined = true }) => {
  const [isClicked, SetisClicked] = useState(false);
  const [viewAll, SetviewAll] = useState(false);
  const [isFounder, SetisFounder] = useState(false);
  const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function onPress() {
    SetisClicked(!isClicked);
  }

  function handleViewAll() {
    SetviewAll(!viewAll);
  }
  return (
    <>
      <div className={styles.container}>
        <Row className={styles.row}>
          <Col xs={20} md={20} lg={20} xl={20} xxl={20} className={styles.col}>
            <Text className={styles.ChTopContent}>
              simplifying personal finance for women
            </Text>
          </Col>
          <Col xs={4} md={4} lg={4} xl={4} xxl={4} className={styles.col3}>
            {!isJoined ? null : (
              <Badge className={styles.ChBadge}>
                <Text style={{ color: "#FAFAFA" }}>public</Text>
              </Badge>
            )}
          </Col>
        </Row>
        <Row className={styles.row}>
          <Text>
            women playing sports, bindass, lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry&apos;s standard du,dummy text of the printing and
            typesetting industry. ...more
          </Text>
        </Row>
      </div>

      <div className={styles.container3}>
        <ButtonComponent pageName="clubhouseinfo" isJoined/>
      </div>

      <div className={styles.container2}>
        <Image
          src="/assets/images/ch-inactive.png"
          alt="profile picture"
          width={35}
          height={20}
        />
        <Text style={{ marginLeft: "3rem", marginRight: "3rem" }}>
          121 members
        </Text>
      </div>
      {n.slice(0, 3).map((i) => {
        return (
          <>
            <Row className={styles.row2}>
              <Col xs={6} md={6} lg={5} xl={4} xxl={3}>
                {" "}
                <Avatar
                  className={styles.Avatar}
                  src={"/assets/images/Ragini.png"}
                />
              </Col>
              <Col xs={8} md={8} lg={9} xl={10} xxl={11} className={styles.col}>
                <Text>ragini das</Text>
              </Col>
              <Col xs={10} md={10} lg={10} xl={10} xxl={10}>
                {/* {!isFounder ? (
            <Text className={styles.Chtext2}>Founder</Text>
          ) : null} */}
              </Col>
            </Row>
          </>
        );
      })}
      {viewAll ? (
        n.slice(3).map((i) => {
          return (
            <>
              <Row className={styles.row2}>
                <Col xs={6} md={6} lg={5} xl={4} xxl={3}>
                  {" "}
                  <Avatar
                    className={styles.Avatar}
                    src={"/assets/images/Ragini.png"}
                  />
                </Col>
                <Col
                  xs={8}
                  md={8}
                  lg={9}
                  xl={10}
                  xxl={11}
                  className={styles.col}
                >
                  <Text>ragini das</Text>
                  {/* {!isFounder ? (
            <Text className={styles.Chtext2}>is a Founder</Text>
          ) : null} */}
                </Col>
              </Row>
            </>
          );
        })
      ) : (
        <div className={styles.ChLink} onClick={handleViewAll}>
          <a>view all members </a>
        </div>
      )}
    </>
  );
};

export default ClubhouseCardInfo;
