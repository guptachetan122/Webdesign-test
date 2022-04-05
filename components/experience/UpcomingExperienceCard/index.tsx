/* eslint-disable @next/next/no-img-element */
import { Col, Row, Typography } from "antd";
import React from "react";
import ButtonComponent from "../../common/ButtonComponent";
import styles from "./UpcomingExperienceCard.module.css";
import Link from "next/link";
import { CheckCircleFilled } from "@ant-design/icons";

const { Text } = Typography;

const UpcomingExperienceCard = ({
  viewMore = false,
  isBooked = false,
  isPay = false,
}) => {
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
        <Row className={styles.Row}>
          {" "}
          <Col>
            <div className={styles.DateWrapper}>
              {" "}
              <Row>
                <Text className={styles.Date}>25 Feb</Text>
              </Row>
              <Row>
                <Text className={styles.Time}>07:30 PM</Text>
              </Row>
            </div>
          </Col>
          <Col className={styles.LabelCol}>
            {isBooked ? (
              <div className={styles.LabelText}>
                <CheckCircleFilled />
                {"  "}slot booked
              </div>
            ) : null}
          </Col>
        </Row>

        <Row className={styles.TitleRow}>
          <div>how to effectively make friends and love your job</div>
        </Row>
        {viewMore ? (
          <Link href="/experiences/id" passHref>
            <a>
              <Text className={styles.LinkText}>view details</Text>
            </a>
          </Link>
        ) : null}

        {isBooked ? (
          <ButtonComponent Name="Booked" infoPage />
        ) : isPay ? (
          <ButtonComponent
            Name="notBooked"
            infoPage
            buttonName="book slot and pay"
          />
        ) : (
          <ButtonComponent Name="notBooked" infoPage buttonName="book slot" />
        )}
      </div>
    </>
  );
};

export default UpcomingExperienceCard;
