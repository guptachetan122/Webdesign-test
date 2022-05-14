import { Col, Modal, Row, Typography } from "antd";
import React, { useState } from "react";
import styles from "../Profile.module.css";
import modalStyles from "../ProfileModals.module.css";
import { prompts } from "../../../constants";
import { useMediaQuery } from "../../../utils/useMediaQuery";
import EditPrompt from "../EditPrompt";
import { useAppSelector } from "../../../app/hooks";
import { Edit3 } from "react-feather";

const { Text } = Typography;

const SelectPrompts = ({ editMode = false }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [width] = useMediaQuery();

  const promptsData = useAppSelector((state) => state.promptSlice);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleUpdate = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      {" "}
      {editMode ? (
        <div className={styles.TriggerButton} onClick={showModal}>
          <Edit3 className={styles.EditIcon} />
        </div>
      ) : (
        <button className={styles.button} onClick={showModal}>
          + answer prompts
        </button>
      )}
      <Modal
        className={modalStyles.Modal}
        width={width > 2500 ? "50%" : width < 800 ? "90%" : "60%"}
        centered
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <div>
          <Row className={styles.DetailRow}>
            <Text className={styles.Name}>going good!</Text>
          </Row>
          <Row className={styles.DetailRow}>
            <Text className={styles.Description}>
              add upto 3 prompts to your profile,
              <br /> break the ice and invite some great conversations your way!
            </Text>
          </Row>
          <Row className={styles.DetailRow}>
            {promptsData?.map((item) => {
              return (
                <Row className={styles.PromptsRow} key={item.title}>
                  <button
                    className={
                      item?.description != ""
                        ? styles.TagButtonActive
                        : styles.TagButton
                    }
                  >
                    <EditPrompt
                      promptTitle={item.title}
                      promptDescription={item.description}
                    />
                  </button>
                </Row>
              );
            })}
          </Row>
        </div>
        <Row>
          <Col span={24}>
            <div className={modalStyles.ButtonWrapper}>
              {/* <button className={modalStyles.Button} onClick={handleCancel}>
                cancel
              </button> */}

              <button
                className={modalStyles.GradientButton}
                onClick={handleUpdate}
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

export default SelectPrompts;
