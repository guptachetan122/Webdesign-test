/* eslint-disable @next/next/no-img-element */
import React from "react";
import { CalendarIcon as ExperienceInactive } from "@heroicons/react/outline";
import styles from "./ButtonExperiences.module.css";
import { Col, Row, Typography} from "antd";
import { PlusCircleOutlined, YoutubeFilled } from "@ant-design/icons";

const { Text } = Typography;

const ButtonExperiences = ({ Name = "", infoPage = false, buttonName =""}) => {
  return (
    <>
      {Name == "notBooked" ? (
        infoPage ? (
          <>
            <Row className={styles.Row}>
              <button className={styles.ButtonDark}>
                {" "}
                <ExperienceInactive className={styles.Icon} />
                {buttonName}
              </button>
            </Row>
          </>
        ) : (
          <>
            <Row className={styles.Row}>
              <button className={styles.Button}>
                {" "}
                <ExperienceInactive className={styles.Icon} />
                {buttonName}
              </button>
            </Row>
          </>
        )
      ) : null}

      {Name == "Booked" ? (
        infoPage ? (
          <Row className={styles.Row}>
            <button className={styles.ButtonDark}>
              {" "}
              <PlusCircleOutlined className={styles.Icon} />
              add to calendar
            </button>
          </Row>
        ) : (
          <Row className={styles.Row}>
            <button className={styles.Button}>
              {" "}
              <PlusCircleOutlined className={styles.Icon} />
              {buttonName}
            </button>
          </Row>
        )
      ) : null}

      {Name == "Masterclass" ? (
        <Row className={styles.Row}>
          <Col span={12} className={styles.Column}>
            <button className={styles.Button}>
              {" "}
              <img src="/assets/images/spotify.svg" alt="spotify icon" className={styles.Icon} />
              listen
            </button>
          </Col>
          <Col span={12} className={styles.Column}>
            <button className={styles.Button}>
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
export default ButtonExperiences;
