/* eslint-disable @next/next/no-img-element */
import { Col, Row, Typography } from "antd";
import React from "react";
import ButtonComponent from "../../common/ButtonComponent";
import styles from "./UpcomingExperienceCard.module.css";
import Link from "next/link";
import { CheckCircleFilled, DollarCircleOutlined } from "@ant-design/icons";
import { LocationMarkerIcon } from "@heroicons/react/solid";

const { Text } = Typography;

const UpcomingExperienceCard = ({
  viewMore = false,
  isBooked = false,
  isPay = false,
  isArchived = false,
  Name = ""
}) => {
  return (
    <>
      <div className={styles.Container}>
        <Row className={styles.Background}>
          <div className={styles.LabelDiv}>
            {Name == "online" ? (
              <button className={styles.Label}>
                {" "}
                <LocationMarkerIcon className={styles.LabelIcon} />
                online
              </button>
            ) : (
              <button className={styles.Label}>
                {" "}
                <LocationMarkerIcon className={styles.LabelIcon} />
                offline
              </button>
            )}
            {isPay ? (
              <button className={styles.Label}>
                {" "}
                <DollarCircleOutlined className={styles.LabelIcon} /> paid
              </button>
            ) : null}
          </div>
          <img
            src="/assets/images/exp2.png"
            alt="alt"
            width="100%"
            className={styles.CoverImage}
          />
        </Row>
        {isArchived ? null : (
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
        )}

        <Row className={styles.NameRow}>
          <Text className={styles.Name}>the pow(d)er room</Text>
        </Row>

        <Link href="/experiences/id" passHref>
          <a>
            <Text className={styles.LinkText}>view details</Text>
          </a>
        </Link>

        {isArchived ? (
          <ButtonComponent Name="Masterclass" />
        ) : isBooked ? (
          <ButtonComponent Name="Booked" buttonName="add to calendar" />
        ) : isPay ? (
          <ButtonComponent Name="notBooked" buttonName="book slot and pay" />
        ) : (
          <ButtonComponent Name="notBooked" buttonName="book slot" />
        )}
      </div>
    </>
  );
};

export default UpcomingExperienceCard;
