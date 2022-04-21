import React, { useState } from "react";
import styles from "./ScModal.module.css";
import { Modal } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { LightningBoltIcon as ScInactive } from "@heroicons/react/solid";

const ScModal = ({onlyIcon = false}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      {onlyIcon ? (
        <button className={styles.Button} onClick={showModal}>
          <ScInactive className={styles.Icon} />
        </button>
      ) : (
        <button className={styles.Button} onClick={showModal}>
          superconnect&nbsp;
          <ScInactive className={styles.Icon} />
        </button>
      )}

      <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
        className={styles.Modal}
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
        <div className={styles.SendButtonWrapper}>
          <button className={styles.SendButton} onClick={handleCancel}>
            send
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ScModal;
