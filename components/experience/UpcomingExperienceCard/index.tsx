/* eslint-disable @next/next/no-img-element */
import { Col, Row, Typography } from "antd";
import React from "react";
import ButtonExperiences from "../../common/Button/ButtonExperiences";
import styles from "./UpcomingExperienceCard.module.css";
import Link from "next/link";
import { ArrowRightOutlined, CheckCircleFilled } from "@ant-design/icons";
import {
  LocationMarkerIcon,
  VideoCameraIcon,
  CurrencyRupeeIcon,
} from "@heroicons/react/outline";

const { Text } = Typography;

const UpcomingExperienceCard = ({
  viewMore = false,
  isBooked = false,
  isPay = false,
  isArchived = false,
  Name = "",
}) => {
  return (
    <>
      <div className={styles.Container}>
        <Row className={styles.Background}>
          <div className={styles.LabelWrapper}>
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
            className={styles.Image}
          />
        </Row>
        {isArchived ? null : (
          <Row className={styles.DateRow}>
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
            <Col className={styles.LabelColumn}>
              {isBooked ? (
                <div className={styles.LabelText}>
                  <CheckCircleFilled />
                  {"  "}slot booked
                </div>
              ) : null}
            </Col>
          </Row>
        )}
        <Row>
          <Col span={12} className={styles.NameColumn}>
            {" "}
            <div>
              <Text className={styles.Name}>the pow(d)er room</Text>
            </div>
          </Col>
          <Col span={12} className={styles.DetailColumn}>
            <div>
              <Link href="/experiences/id" passHref>
                <a>
                  <Text className={styles.Link}>
                    {/* view details{"  "} */}
                    <ArrowRightOutlined />
                  </Text>
                </a>
              </Link>
            </div>
          </Col>
        </Row>

        {isArchived ? (
          <ButtonExperiences Name="Masterclass" />
        ) : isBooked ? (
          <ButtonExperiences Name="Booked" buttonName="add to calendar" />
        ) : isPay ? (
          <ButtonExperiences Name="notBooked" buttonName="book slot and pay" />
        ) : (
          <ButtonExperiences Name="notBooked" buttonName="book slot" />
        )}
      </div>
    </>
  );
};

export default UpcomingExperienceCard;
