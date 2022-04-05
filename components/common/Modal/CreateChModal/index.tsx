import { PlusOutlined, QuestionOutlined } from "@ant-design/icons";
import { Input, Modal, Radio, Row, Typography } from "antd";
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
      <button className={styles.TriggerButton} onClick={showModal}>
        {" "}
        <PlusOutlined /> create new clubhouse
      </button>
      <Modal
        className={styles.Modal}
        centered
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={600}
      >
        <div className={styles.Title}>start a new clubhouse</div>
        <Text className={styles.Text}>give your clubhouse a name</Text>
        <Input
          placeholder="go ahead, give it a cool name"
          className={styles.Input}
        />

        <Text className={styles.Text}>
          what will this clubhouse talk about?
        </Text>
        <TextArea
          placeholder="6-10 words will be ideal"
          className={styles.Input}
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
          <Text className={styles.RadioText}>any member can join</Text>
        ) : (
          <Text className={styles.RadioText}>
            only invited members or members approved by founder can join
          </Text>
        )}
        <br />
        <br />
        <div className={styles.Button}>
          <button className={styles.BackButton} onClick={handleCancel}>
            add members (you have to add min 3)
          </button>
        </div>
      </Modal>
    </>
  );
};

export default CreateChModal;
