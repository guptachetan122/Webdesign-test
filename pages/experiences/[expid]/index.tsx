// Change this page to index.tsx

import { Col, Row } from "antd";
import { useRouter } from "next/router";
import React from "react";
import ExperienceInfo from "../../../components/experience/ExperienceInfo";
import Sidebar from "../../../components/Sidebar";
import Subheader from "../../../components/Subheader2";
import { expbackNavbar} from "../../../constants/constants";
import styles from "../../../styles/Experience.module.css";

const ExperienceDetails = () => {
    const Router = useRouter();
    const { expid } = Router.query;
    
  return (
    <>
      {/* <div className={styles.Header}>
        {" "}
        <Subheader SubheaderData={expbackNavbar} />{" "}
      </div> */}
      <Row className={styles.Body}>
        <Col span={6} className={styles.sidebarPos}>
          {" "}
          <Sidebar pageName={"experiences"} />{" "}
        </Col>
        <Col span={12} className={styles.middleCol}>
          <Row>
            <Col span={6}></Col>
            <Col span={12}>
              <div style={{}}>
                <ExperienceInfo />
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={6}></Col>
      </Row>
    </>
  );
};

export default ExperienceDetails;
