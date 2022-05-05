import React, { useEffect, useRef, useState } from "react";
import { Modal, Button, Typography } from "antd";
import styles from "./LikesModal.module.css";
import Member from "../../../sc/Member";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

const { Text } = Typography;

const LikesModal = ({ num = 0 }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
    
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
      setIsModalVisible(false);
  };


  return (
    <>
      <Text className={styles.Button} onClick={showModal}>
        {num} likes
      </Text>
      {/* <div id="targetElementId"> */}
      <Modal
        centered
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        className={styles.Modal}
        // width="fit-content"
        destroyOnClose
        bodyStyle={{
          padding: '1rem 0rem'
        }}
      >
        <div className={styles.Modal_body}>
          <Member pageName="likeSc" />
          <Member pageName="likeChat" />
          <Member pageName="likeSc" />
          <Member pageName="likeSc" />
          <Member pageName="likeSc" />
          <Member pageName="likeSc" />
          <Member pageName="likeChat" />
          <Member pageName="likeSc" />
          <Member pageName="likeSc" />
          <Member pageName="likeSc" />
        </div>
      </Modal>
      {/* </div> */}
    </>
  );
};

export default LikesModal;
