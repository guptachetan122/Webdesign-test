import React, { useState } from 'react'
import Image from "next/image";
import styles from './ScModal.module.css'
import { Modal } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
const ScModal = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };

    const handleCancel = () => {
      setIsModalVisible(false);
  };
  
  return (
    <>
      <div className={styles.ScButtonWrapper}>
        <button className={styles.ScButton} onClick={showModal}>
          superconnect{" "}
          <Image
            src="/assets/images/sc-white.png"
            alt="sc button icon"
            width={10}
            height={15}
          />
        </button>
      </div>

      <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
        className={styles.ScModal}
      >
        <p>
          great! you are now connected with{" "}
          <span style={{ fontWeight: "700" }}>ragini das</span>.
        </p>
        <p>
          {" "}
          their posts will now appear on your private feed. you can also drop a
          👋 and slide into their dm’s
        </p>
        <TextArea
          rows={8}
          placeholder="your leap starts here - this is the start of your private chat with ragini das. just say hi or share anything on your mind, no agenda needed. you can send a video along with your message."
          maxLength={50}
        />
        <div className={styles.ScModalButtonWrapper}>
          <button className={styles.ScModalButton} onClick={handleCancel}>
            send
          </button>
        </div>
      </Modal>
    </>
  );
}

export default ScModal