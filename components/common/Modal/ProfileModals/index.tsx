import { QuestionCircleOutlined, QuestionOutlined } from '@ant-design/icons';
import { Col, Modal, Row } from 'antd';
import React, { useState } from 'react'
import { Edit3 } from 'react-feather';
import styles from "./ProfileModals.module.css";
import TextArea from "antd/lib/input/TextArea";

const IntroModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

    const handleSubmit = () => {
    
}
  return (
    <>
      <button className={styles.TriggerButton} onClick={showModal}>
        <Edit3 />
      </button>
      <Modal
        className={styles.Modal}
        centered
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={500}
      >
        <div className={styles.Title}>Introduction</div>
        <TextArea placeholder="" autoSize className={styles.TextArea} />

        <Row>
          <Col span={12}>
            <div className={styles.Button}>
              <button className={styles.BackButton} onClick={handleCancel}>
                cancel
              </button>
            </div>
          </Col>
          <Col span={12}>
            {" "}
            <div className={styles.Button}>
              <button className={styles.BackButton} onClick={handleCancel}>
                apply
              </button>
            </div>
          </Col>
        </Row>
      </Modal>
    </>
  );
}

const HobbiesModal = () => {
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
        <Edit3 />
      </button>
      <Modal
        className={styles.Modal}
        centered
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={500}
      >
        <div className={styles.Title}>my social interests and hobbies</div>
        <TextArea placeholder="" autoSize className={styles.TextArea} />

        <Row>
          <Col span={12}>
            <div className={styles.Button}>
              <button className={styles.BackButton} onClick={handleCancel}>
                cancel
              </button>
            </div>
          </Col>
          <Col span={12}>
            {" "}
            <div className={styles.Button}>
              <button className={styles.BackButton} onClick={handleCancel}>
                apply
              </button>
            </div>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

const HeroModal = () => {
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
        <Edit3 />
      </button>
      <Modal
        className={styles.Modal}
        centered
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={500}
      >
        <div className={styles.Title}>my hero</div>
        <TextArea placeholder="" autoSize className={styles.TextArea} />

        <Row>
          <Col span={12}>
            <div className={styles.Button}>
              <button className={styles.BackButton} onClick={handleCancel}>
                cancel
              </button>
            </div>
          </Col>
          <Col span={12}>
            {" "}
            <div className={styles.Button}>
              <button className={styles.BackButton} onClick={handleCancel}>
                apply
              </button>
            </div>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

const AllClubhousesModal = () => {
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
        <Edit3 />
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
        <TextArea
          placeholder=" add a comment.."
          autoSize
          className={styles.TextArea}
        />

        <Row>
          <Col span={12}>
            <div className={styles.Button}>
              <button className={styles.BackButton} onClick={handleCancel}>
                cancel
              </button>
            </div>
          </Col>
          <Col span={12}>
            {" "}
            <div className={styles.Button}>
              <button className={styles.BackButton} onClick={handleCancel}>
                apply
              </button>
            </div>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

const EducationModal = () => {
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
        <Edit3 />
      </button>
      <Modal
        className={styles.Modal}
        centered
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={500}
      >
        <div className={styles.Title}>grad school</div>
        <TextArea placeholder="" autoSize className={styles.TextArea} />

        <div className={styles.Title}>college</div>
        <TextArea placeholder="" autoSize className={styles.TextArea} />

        <Row>
          <Col span={12}>
            <div className={styles.Button}>
              <button className={styles.BackButton} onClick={handleCancel}>
                cancel
              </button>
            </div>
          </Col>
          <Col span={12}>
            {" "}
            <div className={styles.Button}>
              <button className={styles.BackButton} onClick={handleCancel}>
                apply
              </button>
            </div>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default IntroModal