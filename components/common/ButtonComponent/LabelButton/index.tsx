import { DollarCircleOutlined } from "@ant-design/icons";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import React from "react";
import styles from "./ButtonComponent.module.css";

const LabelButton = ({ Name = '', pay = false }) => {
  return (
    <>
      <div className={styles.LabelButtonWrapper}>
        {
          (Name == "online" ? (
            <button className={styles.LabelButton}>
              {" "}
              <LocationMarkerIcon className={styles.LabelButtonIcon} />
              online
            </button>
          ) : (
            <button className={styles.LabelButton}>
              {" "}
              <LocationMarkerIcon className={styles.LabelButtonIcon} />
              offline
            </button>
          ))
        }
        {pay ? (<button className={styles.LabelButton}>
          {" "}
          <DollarCircleOutlined className={styles.LabelButtonIcon} /> paid
        </button>) :  null}
      </div>
    </>
  );
};

export default LabelButton;
