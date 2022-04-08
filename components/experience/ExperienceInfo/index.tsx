/* eslint-disable @next/next/no-img-element */
import { Col, Row, Typography } from "antd";
import React from "react";
import ButtonComponent from "../../common/ButtonComponent";
import styles from "./ExperienceInfo.module.css";
import {
  LocationMarkerIcon,
  VideoCameraIcon,
  CurrencyRupeeIcon
} from "@heroicons/react/outline";
import { CheckCircleFilled, DollarCircleOutlined } from "@ant-design/icons";

const { Text } = Typography;

const ExperienceInfo = ({
  isPay = false,
  Name = "",
  isBooked = true,
  isArchived = false,
}) => {
  return (
    <>
      <div className={styles.Container}>
        <Row className={styles.Background}>
          <div className={styles.LabelDiv}>
            {Name == "online" ? (
              <button className={styles.Label}>
                {" "}
                <VideoCameraIcon className={styles.LabelIcon} />
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
                <CurrencyRupeeIcon className={styles.LabelIcon} /> paid
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
        <Row className={styles.DateWrapper}>
          {" "}
          <Col>
            <div className={styles.DateCard}>
              <Row>
                <Text className={styles.Date}>25 Feb</Text>
              </Row>
              <Row>
                <Text className={styles.Time}>07:30 PM</Text>
              </Row>
            </div>
          </Col>
          <Col className={styles.bookedLabelCol}>
            {" "}
            {isBooked ? (
              <div className={styles.bookedLabelText}>
                <CheckCircleFilled />
                {"  "}slot booked
              </div>
            ) : null}
          </Col>
        </Row>

        <Row className={styles.NameRow}>
          {/* <Text className={styles.Name}>the pow(d)er room</Text> */}
          <Text className={styles.Name}>the pow(d)er room</Text>
        </Row>
        {isArchived ? (
          <ButtonComponent Name="Masterclass" />
        ) : isBooked ? (
          <ButtonComponent
            Name="Booked"
            infoPage
            buttonName="add to calendar"
          />
        ) : isPay ? (
          <ButtonComponent
            Name="notBooked"
            infoPage
            buttonName="book slot and pay"
          />
        ) : (
          <ButtonComponent Name="notBooked" infoPage buttonName="book slot" />
        )}

        <Row className={styles.Body}>
          <div>
            <div className={styles.Description}>
              clubhouse huddle by sorority sisters
            </div>

            <div className={styles.Heading}>what to expect</div>

            <div className={styles.Description}>
              lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard
              pecimen book. It has survived not only five centuries, but also
              the leap into electronic{" "}
            </div>

            <div className={styles.Heading}>about speaker</div>

            <div className={styles.Description}>
              lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard
              pecimen book. It has survived not only five centuries, but also
              the leap into electronic{" "}
            </div>
          </div>
        </Row>
      </div>
    </>
  );
};

export default ExperienceInfo;
