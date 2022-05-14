import { Col, Input, Modal, Row, Typography } from "antd";
import React, { useState } from "react";
import styles from "../Profile.module.css";
import modalStyles from "../ProfileModals.module.css";
import { prompts } from "../../../constants";
import { useMediaQuery } from "../../../utils/useMediaQuery";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { removePrompt, updatePrompt } from "../PromptSlice";
import { Check, Edit3, Plus, XCircle } from "react-feather";

const { Text } = Typography;
const { TextArea } = Input;

const EditPrompt = ({
  promptTitle = "",
  promptDescription = "",
  openModal = false,
}) => {
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [description, setDescription] = useState(promptDescription);
  const [finalValue, setFinalValue] = useState(promptDescription);
  const [width] = useMediaQuery();

  const dispatch = useAppDispatch();

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

  const isPresent = (item: any) => {
    return item?.description != "" && item?.description === promptDescription;
  };
  const showModal = () => {
    setIsEditModalVisible(true);
  };

  const handleEditPrompt = (e: any) => {
    setDescription(e.target.value);
  };

  const handleCancel = () => {
    setIsEditModalVisible(false);
  };

  const handleUpdate = () => {
    const data = {
      title: promptTitle,
      description: description.trim(),
    };
    dispatch(updatePrompt(data));
    setIsEditModalVisible(false);
  };

  const handleRemove = () => {
    const data = {
      title: promptTitle,
      description: description.trim(),
    };
    dispatch(removePrompt(data));
    setIsEditModalVisible(false);
  };

  return (
    <>
      <div className={styles.item}>
        {promptsData.some(isPresent) ? (
          <span className={styles.notify_badge}>
            <XCircle className={styles.notify_badge_style} />
          </span>
        ) : (
          null
        )}

        <div
          className={styles.EditPromptText}
          onClick={
            calLength() < 3 || promptsData.some(isPresent)
              ? showModal
              : () => {
                  alert("max 3 propmts");
                }
          }
        >
          <div>{promptTitle}</div>
          {promptsData.some(isPresent) ? (
            <div>
              <Edit3 />
            </div>
          ) : (
            <div>
              <Plus color="#919191" />
            </div>
          )}
        </div>
      </div>
      <Modal
        className={modalStyles.Modal}
        width={width > 2500 ? "40%" : width < 800 ? "80%" : "50%"}
        centered
        visible={isEditModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <div className={modalStyles.Wrapper}>
          {" "}
          <div className={modalStyles.Title}>{promptTitle}</div>
          <TextArea
            placeholder=""
            value={description}
            onChange={handleEditPrompt}
            autoSize
            id={styles.TextArea}
            style={{ minHeight: 150 }}
            // onPressEnter={handleUpdateIntro}
          />
        </div>
        <Row>
          <Col span={24}>
            <div className={modalStyles.ButtonWrapper}>
              <button className={modalStyles.Button} onClick={handleCancel}>
                cancel
              </button>
              <button
                className={modalStyles.removeButton}
                onClick={handleRemove}
              >
                remove prompt
              </button>
              <button
                className={modalStyles.GradientButton}
                onClick={handleUpdate}
              >
                {promptsData?.some(isPresent) ? (
                  <div>update prompt</div>
                ) : (
                  <div>add prompt</div>
                )}
              </button>
            </div>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default EditPrompt;
