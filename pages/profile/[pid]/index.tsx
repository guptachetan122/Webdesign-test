/* eslint-disable @next/next/no-img-element */
import { Avatar, Card, Carousel, Col, Input, Row, Typography } from "antd";
import React, { useState } from "react";
import Sidebar from "../../../components/Layout/Sidebar";
import styles from "../../../styles/Profile.module.css";
import BackHeader from "../../../components/common/BackHeader";
import Image from "next/image";
import {
  ChTags,
  companies,
  ExpTags,
  searchFilterTags,
} from "../../../constants";
import { ProfileDetail } from "../../../constants";
import TextCard from "../../../components/Profile/TextCard";
import TagsCard from "../../../components/Profile/TagsCard";
import AllJoinedChCard from "../../../components/Profile/AllJoinedChCard";
import ProfileInfo from "../../../components/Profile/ProfileInfo";
import Prompts from "../../../components/Profile/Prompts";

const { Text } = Typography;

const Profile = () => {

  const {name, headline, city, currentCompany : work, connectionsCount : connects} = ProfileDetail;
  return (
    <>
      <Row className={styles.Body}>
        <Col span={6} className={styles.Sidebar}>
          {/* <Sidebar pageName={"feed"} />{" "} */}
        </Col>

        <Col span={12} className={styles.MiddleColumn}>
          <Row>
            <Col span={2}></Col>
            <Col span={20}>
              <BackHeader />

              <ProfileInfo name={name} headline={headline} work={work} city={city} connects={connects} />

              <TextCard
                Title="introduction"
                Input={ProfileDetail?.introduction}
              />

              <Prompts />
              {/* <Prompts2 /> */}
              
              <TextCard
                Title="my social interests and hobbies"
                Input={ProfileDetail?.hobbies}
              />

              <TextCard Title="my hero" Input={ProfileDetail?.leader} />

              <AllJoinedChCard />

              <TagsCard
                Title="companies i admire"
                ProfileArray={ProfileDetail?.companyAdmire}
                ModalArray={companies}
              />

              <TagsCard
                Title="tags and industries"
                ProfileArray={ProfileDetail?.industryTags}
                ModalArray={searchFilterTags?.industryTags}
                industryTags
              />

              <TagsCard
                Title="top skills"
                ProfileArray={ProfileDetail?.topSkills}
                ModalArray={searchFilterTags?.skillTags}
              />

              <TextCard
                Title="grad school"
                Title2="college"
                Input={ProfileDetail?.postgrad}
                Input2={ProfileDetail?.undergrad}
              />
            </Col>
            <Col span={2}></Col>
          </Row>
        </Col>

        <Col span={6}></Col>
      </Row>
    </>
  );
};

export default Profile;
