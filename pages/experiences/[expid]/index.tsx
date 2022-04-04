// Change this page to index.tsx

import { Col, Row } from "antd";
import { useRouter } from "next/router";
import React from "react";
import ExperienceInfo from "../../../components/experience/ExperienceInfo";
import Sidebar from "../../../ui/Sidebar";
import Subheader from "../../../ui/Subheader2";
import { expbackNavbar} from "../../../constants/constants";
import styles from "../../../styles/Experience.module.css";

const ExperienceDetails = () => {
    const Router = useRouter();
    const { expid } = Router.query;
    
  return (
    <>
      <Row className={styles.Body}>
        <Col span={6} className={styles.Sidebar}>
          {" "}
          <Sidebar pageName={"experiences"} />{" "}
        </Col>
        <Col span={12} className={styles.MiddleCol}>
          <Row>
            <Col span={4}></Col>
            <Col span={15}>
              <div>
                <ExperienceInfo isPay isBooked/>
              </div>
            </Col>
            <Col span={4}></Col>
          </Row>
        </Col>
        <Col span={6}></Col>
      </Row>
    </>
  );
};

export default ExperienceDetails;
