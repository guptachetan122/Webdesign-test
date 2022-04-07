import { QuestionCircleOutlined, QuestionOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import React, { useState } from 'react'
import styles from './ClubhouseModal.module.css'


const ClubhouseModal = () => {
  
   const [isModalVisible, setIsModalVisible] = useState(false);

   const showModal = () => {
     setIsModalVisible(true);
   };

   const handleCancel = () => {
     setIsModalVisible(false);
  };
  
  return (
    <>
      <button className={styles.TriggerButton} onClick={showModal}>
        <QuestionOutlined /> what is a clubhouse
      </button>
      <Modal
        className={styles.Modal}
        centered
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={500}
      >
        <div className={styles.Title}> what is a clubhouse ?</div>
        <div className={styles.Description}>
          clubhouses are micro-communities that help you find your tribe inside
          the larger leap.club community. it’s a great place to meet others and
          build strong relationships
        </div>
        <div className={styles.Description}>
          join at least 7-8 clubhouses that are relevant to you.
        </div>
        <div className={styles.Description}>
          participate in the conversations, answer questions, join the huddles,
          take initiative and organise get-togethers for fellow members
        </div>
        <div className={styles.Description}>
          not keen to be notified of all clubhouse messages? hit the three dots
          in the top right corner of the specific clubhouse, and tap “mute clubhouse”
        </div>
        <div className={styles.Description}>
          new and interesting clubhouses are created as the community grows.
          make sure to check out what’s new every few weeks by tapping “join a
          clubhouse”
        </div>
        <div className={styles.Description}>
          looking to start a new clubhouse? first browse the list of existing
          clubhouses before you go ahead. it’s better to join an existing
          clubhouse than to start an overlapping one
        </div>
        <div className={styles.Description}>any questions?</div>
        <div className={styles.Description}>
          write to <a>team@leap.club</a>
        </div>
        <div className={styles.Button}>
          <button className={styles.BackButton} onClick={handleCancel}>
            back
          </button>
        </div>
      </Modal>
    </>
  );
}

export default ClubhouseModal