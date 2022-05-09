/* eslint-disable @next/next/no-img-element */
import { Avatar, Card, Carousel, Col, Input, Row, Typography } from "antd";
import React, { useState } from "react";
import Sidebar from "../../../ui/Sidebar";
import styles from "../../../styles/Profile.module.css";
import BackHeader from "../../../components/common/BackHeader";
import Image from "next/image";
import { Briefcase, Calendar, Edit3, MapPin, Zap } from "react-feather";
import { ChTags, companies, ExpTags } from "../../../constants";
import { ProfileDetail } from "../../../constants";
import IntroModal from "../../../components/common/Modal/ProfileModals";

const { Text } = Typography;

const Profile = () => {
  const [Stay, setStay] = useState(false);
  const [seeAll, setSeeAll] = useState(false);

  const handleViewAll = () => {
    setSeeAll(!seeAll);
  };

  const handle = () => {
    setStay(!Stay);
  };

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
              <div className={styles.Card}>
                <Row>
                  <Col span={22} className={styles.MainColumn}>
                    <div>
                      <Avatar
                        src={
                          <img
                            src={ProfileDetail?.image}
                            alt="profile picture"
                          />
                        }
                        className={styles.profileAvatar}
                      />
                    </div>
                    <div>
                      <Row className={styles.DetailRow}>
                        <Text className={styles.Name}>
                          {ProfileDetail?.name}
                        </Text>
                      </Row>
                      <Row className={styles.DetailRow}>
                        <Text className={styles.Description}>
                          {ProfileDetail?.headline}{" "}
                        </Text>
                      </Row>
                      <div>
                        <Row className={styles.DetailRow}>
                          <Text className={styles.SubDescription}>
                            <Briefcase className={styles.ProfileIcon} />
                            {ProfileDetail?.currentCompany}
                          </Text>
                          <Text className={styles.SubDescription}>
                            <MapPin className={styles.ProfileIcon} /> the hague,
                            {ProfileDetail?.city}
                          </Text>
                        </Row>
                        <Row className={styles.DetailRow}>
                          <Text className={styles.SubDescription}>
                            <Calendar className={styles.ProfileIcon} />
                            member since, aug 2021
                          </Text>
                        </Row>
                        <Row className={styles.DetailRow}>
                          <Text className={styles.SubDescription}>
                            <Zap className={styles.ProfileIcon} />
                            {ProfileDetail?.connectionsCount}+ superconnects
                          </Text>
                        </Row>
                      </div>
                    </div>
                  </Col>
                  <Col span={2}>
                    <Edit3 />
                  </Col>
                </Row>
              </div>
              <div className={styles.Card}>
                <Row>
                  <Col span={22} className={styles.MainColumn}>
                    <div>
                      <Row className={styles.DetailRow}>
                        <Text className={styles.Name}>Introduction</Text>
                      </Row>
                      <Row className={styles.DetailRow}>
                        <Text className={styles.SubDescription}>
                          {ProfileDetail?.introduction}{" "}
                        </Text>
                      </Row>
                    </div>
                  </Col>
                  <Col span={2}>
                    <IntroModal />
                  </Col>
                </Row>
              </div>
              <div className={styles.Card}>
                <Row>
                  <Col span={22} className={styles.MainColumn}>
                    <div>
                      <Row className={styles.DetailRow}>
                        <Text className={styles.Name}>
                          my social interests and hobbies
                        </Text>
                      </Row>
                      <Row className={styles.DetailRow}>
                        <Text className={styles.SubDescription}>
                          {ProfileDetail?.hobbies}{" "}
                        </Text>
                      </Row>
                    </div>
                  </Col>
                  <Col span={2}>
                    <Edit3 />
                  </Col>
                </Row>
              </div>
              <div className={styles.Card}>
                <Row>
                  <Col span={22} className={styles.MainColumn}>
                    <div>
                      <Row className={styles.DetailRow}>
                        <Text className={styles.Name}>my hero</Text>
                      </Row>
                      <Row className={styles.DetailRow}>
                        <Text className={styles.SubDescription}>
                          {ProfileDetail?.leader}{" "}
                        </Text>
                      </Row>
                    </div>
                  </Col>
                  <Col span={2}>
                    <Edit3 />
                  </Col>
                </Row>
              </div>

              <div className={styles.Card}>
                <Row>
                  <Col span={22} className={styles.MainColumn}>
                    <div className={styles.Wrapper}>
                      <Row className={styles.DetailRow}>
                        <Text className={styles.Name}>
                          clubhouses i&apos;m a part of
                        </Text>
                      </Row>
                      <Row className={styles.DetailRow}>
                        {!seeAll ? (
                          <>
                            {ProfileDetail?.chList?.slice(0, 3).map((item) => {
                              return (
                                <>
                                  <Row className={styles.ChRow}>
                                    <Text
                                      key={item}
                                      className={styles.SubDescription}
                                    >
                                      {item}
                                    </Text>
                                  </Row>
                                </>
                              );
                            })}
                            <div
                              className={styles.SeeAll}
                              onClick={handleViewAll}
                            >
                              see all
                            </div>
                          </>
                        ) : (
                          <>
                            {" "}
                            {ProfileDetail?.chList?.map((item) => {
                              return (
                                <>
                                  <Row className={styles.ChRow}>
                                    <Text
                                      key={item}
                                      className={styles.SubDescription}
                                    >
                                      {item}
                                    </Text>
                                  </Row>
                                </>
                              );
                            })}
                            <div
                              className={styles.SeeAll}
                              onClick={handleViewAll}
                            >
                              see less
                            </div>
                          </>
                        )}
                      </Row>
                    </div>
                  </Col>
                  <Col span={2}>
                    <Edit3 />
                  </Col>
                </Row>
              </div>

              <div className={styles.Card}>
                <Row>
                  <Col span={22} className={styles.MainColumn}>
                    <div>
                      <Row className={styles.DetailRow}>
                        <Text className={styles.Name}>companies i admire</Text>
                      </Row>
                      <Row className={styles.DetailRow}>
                        {ProfileDetail?.companyAdmire.map((item) => {
                          return (
                            <>
                              <button className={styles.TagButton}>
                                {item}{" "}
                              </button>
                            </>
                          );
                        })}
                      </Row>
                    </div>
                  </Col>
                  <Col span={2}>
                    <Edit3 />
                  </Col>
                </Row>
              </div>

              <div className={styles.Card}>
                <Row>
                  <Col span={22} className={styles.MainColumn}>
                    <div>
                      <Row className={styles.DetailRow}>
                        <Text className={styles.Name}>tags and industries</Text>
                      </Row>
                      <Row className={styles.DetailRow}>
                        {ProfileDetail?.industryTags.map((item) => {
                          return (
                            <>
                              <button className={styles.TagButton}>
                                {item}{" "}
                              </button>
                            </>
                          );
                        })}
                      </Row>
                    </div>
                  </Col>
                  <Col span={2}>
                    <Edit3 />
                  </Col>
                </Row>
              </div>

              <div className={styles.Card}>
                <Row>
                  <Col span={22} className={styles.MainColumn}>
                    <div>
                      <Row className={styles.DetailRow}>
                        <Text className={styles.Name}>top skill sets</Text>
                      </Row>
                      <Row className={styles.DetailRow}>
                        {ProfileDetail?.topSkills.map((item) => {
                          return (
                            <>
                              <button className={styles.TagButton}>
                                {item}{" "}
                              </button>
                            </>
                          );
                        })}
                      </Row>
                    </div>
                  </Col>
                  <Col span={2}>
                    <Edit3 />
                  </Col>
                </Row>
              </div>

              <div className={styles.Card}>
                <Row>
                  <Col span={22} className={styles.MainColumn2}>
                    <div className={styles.Wrapper}>
                      <Row className={styles.DetailRow}>
                        <Text className={styles.Name}>grad school</Text>
                      </Row>
                      <Row className={styles.DetailRow}>
                        <Text className={styles.SubDescription}>
                          {ProfileDetail?.postgrad}{" "}
                        </Text>
                      </Row>
                    </div>
                    <br />
                    <div className={styles.Wrapper}>
                      <Row className={styles.DetailRow}>
                        <Text className={styles.Name}>college</Text>
                      </Row>
                      <Row className={styles.DetailRow}>
                        <Text className={styles.SubDescription}>
                          {ProfileDetail?.undergrad}{" "}
                        </Text>
                      </Row>
                    </div>
                  </Col>
                  <Col span={2}>
                    <Edit3 />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col span={2}></Col>
          </Row>
        </Col>

        <Col span={6}>{/* <button onClick={handle}>Click</button> */}</Col>
      </Row>
    </>
  );
};

export default Profile;
