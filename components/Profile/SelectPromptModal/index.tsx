import { Col, Modal, Row, Typography } from "antd";
import React, { useState } from "react";
import styles from "./SelectPromptModal.module.css";
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
  let length = 0;
  const calLength = () => {
    promptsData.map((item) => {
      if (item.description != "") {
        length++;
      }
    });
    return length;
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleUpdate = () => {
    if (calLength() < 3) {
      alert("select min 3 prompts");
    } else {
      setIsModalVisible(false);
    }
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
          <Row className={modalStyles.DetailRow}>
            <Text className={modalStyles.Title}>going good!</Text>
          </Row>
          <Row className={modalStyles.DetailRow}>
            <Text className={modalStyles.Description}>
              add minimum 3 prompts to your profile,
              <br />break the ice and invite some great conversations your way!
            </Text>
          </Row>
          <Row className={modalStyles.DetailRow}>
            {promptsData?.map((item) => {
              return (
                <Row className={modalStyles.PromptsRow} key={item.title}>
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
                className={
                  calLength() < 4
                    ? modalStyles.GradientButtonBlur
                    : modalStyles.GradientButton
                }
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
