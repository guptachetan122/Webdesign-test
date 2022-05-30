/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Avatar, Col, Input, Modal, Row, Typography } from "antd";
import styles from "./ProfileInfo.module.css";
import modalStyles from "../ProfileModals.module.css";
import { companies, ProfileDetail, searchFilterTags } from "../../../constants";
import { Briefcase, Calendar, Edit3, MapPin, Zap } from "react-feather";

const { Text } = Typography;
const { TextArea } = Input;

const ProfileInfo = ({ name = "", headline = "", work = "", city = "" , connects = 0}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const [Name, setName] = useState(name);
  const [Headline, setHeadline] = useState(headline);
  const [Work, setWork] = useState(work);
  const [City, setCity] = useState(city);

  const [displayName, setDisplayName] = useState(name);
  const [displayHeadline, setDisplayHeadline] = useState(headline);
  const [displayWork, setDisplayWork] = useState(work);
  const [displayCity, setDisplayCity] = useState(city);

  const showModal = () => {
    setName(displayName);
    setHeadline(displayHeadline);
    setWork(displayWork);
    setCity(displayCity);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleName = (e: any) => {
    setName(e.target.value);
  };

  const handleHeadline = (e: any) => {
    setHeadline(e.target.value);
  };

  const handleWork = (e: any) => {
    setWork(e.target.value);
  };

  const handleCity = (e: any) => {
    setCity(e.target.value);
  };
  
  const updateDetail = () => {
    setDisplayName(Name.trim());
    setDisplayHeadline(Headline.trim());
    setDisplayWork(Work.trim());
    setDisplayCity(City.trim());
    setIsModalVisible(false);
  };

  return (
    <>
      <div className={styles.Card}>
        <Row>
          <Col span={22} className={styles.MainColumn}>
            <div>
              <img
                src={ProfileDetail?.image}
                alt="profile picture"
                className={styles.profileAvatar}
              />
            </div>
            <div>
              <Row className={styles.DetailRow}>
                <Text className={styles.Name}>{displayName}</Text>
                <Text className={styles.Description}>
                  {displayHeadline}{" "}
                </Text>
              </Row>
              <div>
                <Row className={styles.DetailRow}>
                  <Text className={styles.SubDescription}>
                    <Briefcase className={styles.ProfileIcon} />
                    {displayWork}
                  </Text>
                </Row>
                <Row className={styles.DetailRow}>
                  <Text className={styles.SubDescription}>
                    <MapPin className={styles.ProfileIcon} />
                    {displayCity}
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
                    {connects}+ superconnects
                  </Text>
                </Row>
              </div>
            </div>
          </Col>
          <Col span={2}>
            <div className={styles.TriggerButton} onClick={showModal}>
              <Edit3 className={styles.EditIcon} />
            </div>
          </Col>
        </Row>
      </div>

      <Modal
        className={modalStyles.Modal}
        centered
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={600}
      >
        <div className={modalStyles.Wrapper}>
          {" "}
          <div className={modalStyles.Title}>name</div>
          <TextArea
            placeholder=""
            value={Name}
            onChange={handleName}
            autoSize
            id={styles.TextArea}
            // onPressEnter={updateDetail}
          />
          <div className={modalStyles.Title}>headline</div>
          <TextArea
            placeholder=""
            value={Headline}
            onChange={handleHeadline}
            autoSize
            id={styles.TextArea}
            style={{ minHeight: 100 }}
          />
          <div className={modalStyles.Title}>workplace / work status</div>
          <TextArea
            placeholder=""
            value={Work}
            onChange={handleWork}
            autoSize
            id={styles.TextArea}
          />
          <div className={modalStyles.Title}>city</div>
          <TextArea
            placeholder=""
            value={City}
            onChange={handleCity}
            autoSize
            id={styles.TextArea}
          />
          <Row>
            <Col span={24}>
              <div className={modalStyles.ButtonWrapper}>
                <button className={modalStyles.Button} onClick={handleCancel}>
                  cancel
                </button>

                <button
                  className={modalStyles.GradientButton}
                  onClick={updateDetail}
                >
                  update
                </button>
              </div>
            </Col>
          </Row>
        </div>
      </Modal>
    </>
  );
};

export default ProfileInfo;
