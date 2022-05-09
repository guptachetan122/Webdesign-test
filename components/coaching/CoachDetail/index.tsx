import React from "react";
import { LinkedinFilled } from "@ant-design/icons";
import {
  Avatar,
  Typography,
  Row,
  Col,
  Divider
} from "antd";
import CoachPackages from "../CoachPackages";
import ButtonDark from "../../common/Button/ButtonDark";
import ButtonLight from "../../common/Button/ButtonLight";
import styles from "./CoachDetail.module.css";
import { Packages } from "../../../constants";

const { Text } = Typography;

const CoachDetail = () => {

  return (
    <>
      <div className={styles.Container}>
        <Row className={styles.Row}>
          <Col className={styles.DetailColumn}>
            <div>
              <Avatar
                className={styles.Avatar}
                src={"/assets/images/Ragini.png"}
              />
            </div>
            <div>
              {" "}
              <div className={styles.DetailRow}>
                <div className={styles.Name}>kavita neelakantan</div>
              </div>
              <div className={styles.DetailRow}>
                <div className={styles.Description}>
                  executive coach | women’s leadership and growth
                </div>
              </div>
              <div className={styles.DetailRow}>
                <LinkedinFilled className={styles.Icon} />
              </div>
            </div>
          </Col>
        </Row>
        <Row className={styles.Row}>
          <Row>
            <div className={styles.Title}>about coach</div>
          </Row>
          <Row>
            <div className={styles.SubTitle}>
              lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard pecimen book.
              It has survived not only five centuries, but also the leap into
              electronic
            </div>
          </Row>
        </Row>
        <Row className={styles.Row}>
          <Text className={styles.Title}>top specializations</Text>
        </Row>
        <Row className={styles.Row}>
          <button className={styles.Tag}>pivot in my career</button>
          <button className={styles.Tag}>build exec presence</button>
        </Row>
        <Row className={styles.BookRow}>
          <Text className={styles.Title}>book a session</Text>
        </Row>
        <Row className={styles.Row}>
          <ButtonLight name="book a free chemistry session" />
        </Row>
        <Divider style={{ borderWidth: 2, borderColor: "#919191" }}>or</Divider>{" "}
        <div>
          {" "}
          <CoachPackages PackageData={Packages} />
        </div>
        <Row className={styles.FooterRow}>
          <ButtonDark name="book session" />
        </Row>
        <Row className={styles.FooterRow}>
          <Text className={styles.FooterText}>
            price is not inclusive of tax
          </Text>
        </Row>
      </div>
    </>
  );
};

export default CoachDetail;
