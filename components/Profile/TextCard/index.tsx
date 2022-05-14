import React, { useState } from "react";
import {
  Col,
  Input,
  Modal,
  Row,
  Typography,
} from "antd";
import styles from "./TextCard.module.css";
import modalStyles from "../ProfileModals.module.css";
import { ProfileDetail } from "../../../constants";
import { Edit3 } from "react-feather";

const { TextArea } = Input;
const { Text } = Typography;

const TextCard = ({ Title = "", Title2 = "", Input = "", Input2 = "" }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [value, setValue] = useState(Input);
  const [value2, setValue2] = useState(Input2);
  const [finalValue, setFinalValue] = useState(Input);
  const [finalValue2, setFinalValue2] = useState(Input2);

  const showModal = () => {
    setValue(value);
    setValue2(value2);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleEdit = (e: any) => {
    setValue(e.target.value);
  };

  const handleEdit2 = (e: any) => {
    setValue2(e.target.value);
  };

  const updateIntro = () => {
    setFinalValue(value);
    setFinalValue2(value2);
    setIsModalVisible(false);
    console.log(value);
  };

  return (
    <>
      <div className={styles.Card}>
        <Row>
          <Col
            span={22}
            className={Title2 != "" ? styles.MainColumn2 : styles.MainColumn}
          >
            <div>
              <div className={styles.DetailRow}>
                <div className={styles.Name}>{Title}</div>
              </div>
              <div className={styles.DetailRow}>
                <div className={styles.SubDescription}>
                  {finalValue}
                </div>
              </div>
            </div>
            {Title2 != "" ? (
              <>
                <br />
                <div>
                  <div className={styles.DetailRow}>
                    <div className={styles.Name}>{Title2}</div>
                  </div>
                  <div className={styles.DetailRow}>
                    <div className={styles.SubDescription}>
                      {finalValue2}
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </Col>
          <Col span={2}>
            <div className={styles.TriggerButton} onClick={showModal}>
              <Edit3 className={styles.EditIcon} />
            </div>
          </Col>
        </Row>
      </div>

      <Modal
        className={modalStyles.Modal}
        centered
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={600}
      >
        <div className={modalStyles.Wrapper}>
          {" "}
          <div className={modalStyles.Title}>{Title}</div>
          <TextArea
            placeholder=""
            value={value}
            onChange={handleEdit}
            autoSize
            id={styles.TextArea}
            style={{ minHeight: Title2 != "" ? 100 : 150 }}
            // onPressEnter={updateIntro}
          />
          {Title2 != "" ? (
            <>
              <div className={modalStyles.Title}>{Title2}</div>
              <TextArea
                placeholder=""
                value={value2}
                onChange={handleEdit2}
                autoSize
                id={styles.TextArea}
                style={{ minHeight: 100 }}
              />
            </>
          ) : null}
          <Row>
            <Col span={24}>
              <div className={modalStyles.ButtonWrapper}>
                <button className={modalStyles.Button} onClick={handleCancel}>
                  cancel
                </button>

                <button
                  className={modalStyles.GradientButton}
                  onClick={updateIntro}
                >
                  update
                </button>
              </div>
            </Col>
          </Row>
        </div>
      </Modal>
    </>
  );
};

export default TextCard;
