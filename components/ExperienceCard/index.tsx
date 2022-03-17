/* eslint-disable @next/next/no-img-element */
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Divider, Row, Typography } from "antd";
import React from "react";
import Image from "next/image";
import ButtonComponent from "../ButtonComponent";
import styles from "./ExperienceCard.module.css";
import Link from "next/link";

const { Text } = Typography;

const ExperienceCard = ({ viewMore = false }) => {
  return (
    <>
      <div className={styles.cardWrapper}>
        <Row className={styles.RowBackground}>
          <ButtonComponent pageName="label" />
          <img src="/assets/images/exp2.png" alt="alt" width="100%" />
        </Row>
        <Row className={styles.row}>
          {" "}
          <div className={styles.card}>
            <Row>
              <Text className={styles.Text}>25 Feb</Text>
            </Row>
            <Row>
              <Text className={styles.Text2}>07:30 PM</Text>
            </Row>
          </div>
        </Row>
        <Row className={styles.row2}>the pow(d)er room</Row>
        {viewMore ? (
          <Link href="/experiences/id" passHref>
            <a>
              <Row className={styles.row3}>view details</Row>
            </a>
          </Link>
        ) : null}
        <Row className={styles.row4}>
          <ButtonComponent pageName="experience" />
        </Row>
      </div>
    </>
  );
};

export default ExperienceCard;

/* <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />, */
