import React, { useState } from "react";
import { Avatar, Card, Carousel, Col, Modal, Row, Typography } from "antd";
import styles from "./TagsCard.module.css";
import modalStyles from "../ProfileModals.module.css";
import { companies, ProfileDetail, searchFilterTags } from "../../../constants";
import { Edit3 } from "react-feather";
import TextArea from "antd/lib/input/TextArea";

const { Text } = Typography;

const TagsCard = ({
  Title = "",
  ProfileArray = [""],
  ModalArray = [""],
  industryTags = false,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [array, updateArray] = useState(ProfileArray);
  const [arrayDisplay, updateDisplayArray] = useState(ProfileArray);

  const showModal = () => {
    updateArray(arrayDisplay);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onClick = (item: any) => {
    if (array.includes(item)) {
      let filteredArray = array.filter((e) => e !== item);
      updateArray(filteredArray);
    } else {
      if (industryTags) {
        array.length < 3 ? updateArray((arr) => [...arr, item]) : null;
      } else {
        updateArray((arr) => [...arr, item]);
      }
    }
  };

  const updateIntro = () => {
    updateDisplayArray(array);
    setIsModalVisible(false);
  };

  return (
    <>
      <div className={styles.Card}>
        <Row>
          <Col span={22} className={styles.MainColumn}>
            <div>
              <Row className={styles.DetailRow}>
                <Text className={styles.Name}>{Title}</Text>
              </Row>
              <Row className={styles.DetailRow}>
                {arrayDisplay?.map((item) => {
                  return (
                    <button className={styles.DetailButton} key={item}>
                      {item}{" "}
                    </button>
                  );
                })}
              </Row>
            </div>
          </Col>
          <Col span={2}>
            <div className={styles.TriggerButton} onClick={showModal}>
              <Edit3 className={modalStyles.EditIcon} />
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
        width={500}
      >
        <div>
          <Row className={styles.ModalRow}>
            <Text className={styles.Name}>
              {Title} {industryTags ? "(max 3 Tags)" : null}
            </Text>
          </Row>
          <Row className={styles.ModalRow}>
            {ModalArray?.map((item) => {
              return (
                <button
                  className={
                    array?.includes(item)
                      ? styles.TagButtonActive
                      : styles.TagButton
                  }
                  onClick={() => {
                    onClick(item);
                  }}
                  key={item}
                >
                  {item}{" "}
                </button>
              );
            })}
          </Row>
        </div>
        <Row>
          <Col span={24}>
            <div className={modalStyles.ButtonWrapper}>
              <button className={modalStyles.Button} onClick={handleCancel}>
                cancel
              </button>

              <button
                className={modalStyles.GradientButton}
                onClick={updateIntro}
              >
                update
              </button>
            </div>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default TagsCard;
