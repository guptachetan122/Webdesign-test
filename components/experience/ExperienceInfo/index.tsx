/* eslint-disable @next/next/no-img-element */
import { Row, Typography } from "antd";
import React from "react";
import ButtonComponent from "../../common/ButtonComponent";
import styles from "./ExperienceInfo.module.css";
import { CalendarIcon as ExperienceInactive } from "@heroicons/react/outline";

const { Text } = Typography;

const ExperienceInfo = () => {
  return (
    <>
      <div className={styles.cardWrapper}>
        <Row className={styles.RowBackground}>
          <ButtonComponent pageName="label" />
          <img
            src="/assets/images/exp2.png"
            alt="alt"
            width="100%"
            className={styles.coverImage}
          />
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
        <Row className={styles.row2}>
          <Text className={styles.Text3}>the pow(d)er room</Text>
        </Row>
        <Row className={styles.row4}>
          <button className={styles.BookInfoButton}>
             <ExperienceInactive className={styles.BookInfoIcon} />
             book slot and pay {" "}
          </button>
        </Row>
        <Row className={styles.row5}>
          <div className={styles.description}>
            <Text>clubhouse huddle by sorority sisters</Text>
          </div>
          <div>
            <div className={styles.heading}>
              <Text>what to expect</Text>
            </div>

            <div className={styles.description}>
              <Text>
                lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                pecimen book. It has survived not only five centuries, but also
                the leap into electronic{" "}
              </Text>
            </div>

            <div className={styles.heading}>
              <Text>about speaker</Text>
            </div>

            <div className={styles.description}>
              <Text>
                lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                pecimen book. It has survived not only five centuries, but also
                the leap into electronic{" "}
              </Text>
            </div>
          </div>
        </Row>
      </div>
    </>
  );
};

export default ExperienceInfo;
