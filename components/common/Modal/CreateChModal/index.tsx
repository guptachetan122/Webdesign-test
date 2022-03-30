import { PlusOutlined, QuestionOutlined } from "@ant-design/icons";
import { Col, Input, Modal, Radio, Row, Typography } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import styles from "./CreateCh.module.css";

const { Text } = Typography;

const CreateChModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [value, setValue] = useState(1);

  const onChangeValue = (e: any) => {
    setValue(e.target.value);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <button className={styles.ChModalTriggerButton} onClick={showModal}>
        {" "}
        <PlusOutlined /> create new clubhouse
      </button>
      <Modal
        className={styles.ChModal}
        centered
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={600}
      >
        <div className={styles.ChModalTitle}>start a new clubhouse</div>
        <Text>give your clubhouse a name</Text>
        <Input
          placeholder="go ahead, give it a cool name"
          className={styles.ChModalInput}
        />

        <Text>what will this clubhouse talk about?</Text>
        <TextArea
          placeholder="6-10 words will be ideal"
          className={styles.ChModalInput}
          rows={4}
        />

        <br />
        <Radio.Group onChange={onChangeValue} defaultValue="1">
          <Radio.Button value="1">public</Radio.Button>
          <Radio.Button value="2">private</Radio.Button>
        </Radio.Group>
        <br />
        <br />
        {value == 1 ? (
          <Text className={styles.radioText}>any member can join</Text>
        ) : (
          <Text className={styles.radioText}>
            only invited members or members approved by founder can join
          </Text>
        )}
        <br />
        <br />
        <div className={styles.ChModalButton}>
          <button className={styles.ChModalBackButton} onClick={handleCancel}>
            add members (you have to add min 3)
          </button>
        </div>
      </Modal>
    </>
  );
};

export default CreateChModal;
