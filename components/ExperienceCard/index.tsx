import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import Meta from "antd/lib/card/Meta";
import Image from "next/image";
import React from "react";
import styles from "./ExperienceCard.module.css";
const ExperienceCard = () => {
  return (
    <Card className={styles.cardWrapper}>
      <div className={styles.imgWrapper}>
        <Image
          alt="example"
          src="/assets/images/exp.png"
          width="100%"
          height="100%"
          objectFit="contain"
        />
      </div>
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
      <Avatar src="../assets/images/image3.png" />
    </Card>
  );
};

export default ExperienceCard;
