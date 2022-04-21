import { useRouter } from "next/router";
import { Col, Input, Row, Typography } from "antd";
import React from "react";
import Sidebar from "../../../ui/Sidebar";
import styles from "../../../styles/Clubhouse.module.css";
import { SearchOutlined } from "@ant-design/icons";
import ClubhouseChat from "../../../components/clubhouse/ClubhouseChat";
import BackHeader from "../../../components/common/BackHeader";

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
              <BackHeader />
              <div>
                <Text className={styles.ChName}>
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
