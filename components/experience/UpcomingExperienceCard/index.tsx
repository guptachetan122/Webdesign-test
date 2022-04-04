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
      <div className={styles.ExpCardWrapper}>
        <Row className={styles.ExpCardBackground}>
          <ButtonComponent Name="label" />
          <img
            src="/assets/images/exp2.png"
            alt="alt"
            width="100%"
            className={styles.ExpCardCoverImage}
          />
        </Row>
        <Row className={styles.ExpCardRow}>
          {" "}
          <Col>
            <div className={styles.ExpCardDate}>
              {" "}
              <Row>
                <Text className={styles.ExpCardText}>25 Feb</Text>
              </Row>
              <Row>
                <Text className={styles.ExpCardText2}>07:30 PM</Text>
              </Row>
            </div>
          </Col>
          <Col className={styles.bookedLabelCol}>
            {isBooked ? (
              <div className={styles.bookedLabelText}>
                <CheckCircleFilled />
                {"  "}slot booked
              </div>
            ) : null}
          </Col>
        </Row>

        <Row className={styles.ExpCardRow2}>
          <div>how to effectively make friends and love your job</div>
          {/* {isBooked ? (
            <Text className={styles.bookedLabelText}>
              <CheckCircleFilled />
              {"  "}slot booked
            </Text>
          ) : null} */}
        </Row>
        {viewMore ? (
          <Link href="/experiences/id" passHref>
            <a>
              <Text className={styles.ExpCardText3}>view details</Text>
            </a>
          </Link>
        ) : null}

        {/* {pageName == "masterclass" ? null : isBooked ? (
          <ButtonComponent Name="Booked" />
        ) : (
          <ButtonComponent Name="notBooked" />
        )} */}
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
