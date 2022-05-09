/* eslint-disable @next/next/no-img-element */
import { Row, Typography } from "antd";
import React from "react";
import ButtonExperiences from "../../common/Button/ButtonExperiences";
import styles from "./ArchiveExperienceCard.module.css";
const { Text } = Typography;

const ArchiveExperienceCard = () => {
  return (
    <>
      <div className={styles.Container}>
        <Row className={styles.Background}>
          <ButtonExperiences Name="label" />
          <img
            src="/assets/images/exp2.png"
            alt="alt"
            width="100%"
            className={styles.Image}
          />
        </Row>
        <Row>
          <ButtonExperiences Name="Masterclass"/>
        </Row>
      </div>
    </>
  );
};

export default ArchiveExperienceCard;
