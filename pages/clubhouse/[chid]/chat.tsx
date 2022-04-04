import { useRouter } from "next/router";
import { Col, Input, Row, Typography } from "antd";
import React from "react";
import Sidebar from "../../../ui/Sidebar";
import styles from "../../../styles/ClubHouse.module.css";
import { SearchOutlined } from "@ant-design/icons";
import ClubhouseChat from "../../../components/clubhouse/ClubhouseChat";

const { Text } = Typography;

const ClubhouseChatPage = () => {
  const Router = useRouter();
  const { chid } = Router.query;
  return (
    <>
      <Row className={styles.Body}>
        <Col span={6} className={styles.Sidebar}>
          <Sidebar pageName={"clubhouse2"} />
        </Col>
        <Col span={12} className={styles.MiddleCol}>
          <Row>
            <Col span={2}></Col>
            <Col span={20}>
              <div className={styles.ChBackDiv}>
                <Text className={styles.ChBackDivText}>
                  {" "}
                  simplifying personal finance for women
                </Text>
              </div>
              <Input
                className={styles.ChInput}
                prefix={<SearchOutlined className={styles.ChIcon} />}
                placeholder={`  search a message`}
              />
              <ClubhouseChat />
            </Col>
            <Col span={2}></Col>
          </Row>
        </Col>
        <Col span={6}></Col>
      </Row>
    </>
  );
};

export default ClubhouseChatPage;
