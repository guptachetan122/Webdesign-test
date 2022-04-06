/* eslint-disable @next/next/no-img-element */
import React from "react";
import { CalendarIcon as ExperienceInactive } from "@heroicons/react/outline";
import styles from "./ButtonComponent.module.css";
import { Col, Row, Typography} from "antd";
import { PlusCircleOutlined, YoutubeFilled } from "@ant-design/icons";

const { Text } = Typography;

const Button = ({ Name = "", infoPage = false, buttonName =""}) => {
  return (
    <>
      {Name == "notBooked" ? (
        infoPage ? (
          <>
            <Row className={styles.ButtonWrapper}>
              <button className={styles.BookButtonDark}>
                {" "}
                <ExperienceInactive className={styles.BookIcon} />
                {buttonName}
              </button>
            </Row>
          </>
        ) : (
          <>
            <Row className={styles.ButtonWrapper}>
              <button className={styles.BookButton}>
                {" "}
                <ExperienceInactive className={styles.BookIcon} />
                {buttonName}
              </button>
            </Row>
          </>
        )
      ) : null}

      {Name == "Booked" ? (
        infoPage ? (
          <Row className={styles.ButtonWrapper}>
            <button className={styles.BookButtonDark}>
              {" "}
              <PlusCircleOutlined className={styles.BookIcon} />
              add to calendar
            </button>
          </Row>
        ) : (
          <Row className={styles.ButtonWrapper}>
            <button className={styles.BookButton}>
              {" "}
              <PlusCircleOutlined className={styles.BookIcon} />
              {buttonName}
            </button>
          </Row>
        )
      ) : null}

      {Name == "Masterclass" ? (
        <Row className={styles.ButtonWrapper}>
          <Col span={12} className={styles.BookedCol}>
            <button className={styles.BookButton}>
              {" "}
              <img src="/assets/images/spotify.png" alt="spotify icon" className={styles.BookIcon} />
              listen
            </button>
          </Col>
          <Col span={12} className={styles.BookedCol}>
            <button className={styles.BookButton}>
              {" "}
              <YoutubeFilled className={styles.youtubeIcon} />
              watch
            </button>
          </Col>
        </Row>
      ) : null}
    </>
  );
};
export default Button;
