/* eslint-disable @next/next/no-img-element */
import { Row, Typography } from "antd";
import React from "react";
import ButtonComponent from "../../common/ButtonComponent";
import styles from "./ArchiveExperienceCard.module.css";
const { Text } = Typography;

const ArchiveExperienceCard = () => {
  return (
    <>
      <div className={styles.Container}>
        <Row className={styles.Background}>
          <ButtonComponent Name="label" />
          <img
            src="/assets/images/exp2.png"
            alt="alt"
            width="100%"
            className={styles.CoverImage}
          />
        </Row>
        <Row>
          <ButtonComponent Name="Masterclass"/>
        </Row>
      </div>
    </>
  );
};

export default ArchiveExperienceCard;
