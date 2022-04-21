import { Avatar, Typography, Row, Col} from "antd";
import React from "react";
import styles from "./PastBooking.module.css";
import ButtonLight from "../../common/Button/ButtonLight";
import ButtonDark from "../../common/Button/ButtonDark";
import Link from "next/link";

const { Text } = Typography;

const PastBooking = () => {
  return (
    <>
      <div className={styles.Container}>
        <Row>
          <Col span={18} className={styles.MiddleCol}>
            <div>
              <Avatar
                className={styles.Avatar}
                src={"/assets/images/Ragini.png"}
              />
            </div>
            <div>
              {" "}
              <div className={styles.NameRow}>
                <Link href="/learn/id" passHref>
                  <div className={styles.Name}>kavita neelakantan</div>
                </Link>
              </div>
              <div className={styles.NameRow}>
                <div className={styles.Description}>3 sessions</div>
              </div>
            </div>
          </Col>
          <Col span={5} className={styles.FeeCol}>
            <button className={styles.FeeButton}>₹15000</button>
          </Col>
        </Row>
        <Row className={styles.MiddleRow}>
          <Col span={8} className={styles.TextCol}>
            <Row>
              <Text className={styles.Heading}>date</Text>
            </Row>
            <Row>
              <Text className={styles.SubHeading}>25 feb 2022</Text>
            </Row>
          </Col>
          <Col span={8} className={styles.TextCol}>
            <Row>
              <Text className={styles.Heading}>booking id</Text>
            </Row>
            <Row>
              <Text className={styles.SubHeading}>123</Text>
            </Row>
          </Col>
          <Col span={8} className={styles.TextCol2}>
            <Row>
              <Text className={styles.Heading}>payment id</Text>
            </Row>
            <Row>
              <Text className={styles.SubHeading}>rzp12908292</Text>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col span={12} className={styles.ButtonCol}>
            {" "}
            <ButtonLight name="rate coach" />
          </Col>
          <Col span={12} className={styles.ButtonCol2}>
            {" "}
            <ButtonDark name="book session" />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default PastBooking;
