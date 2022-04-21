/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import styles from "./ButtonLight.module.css";
import {
  AdjustmentsIcon,
  VolumeOffIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import { Typography } from "antd";

const { Text } = Typography;

const ButtonLight = ({ name = "", msgs = "", onlyIcon = false }) => {
  return (
    <>
      {name == "clubhouse" ? (
        <Link href="/clubhouse/id/chat" passHref>
          <button className={styles.Button}>
            <span style={{ fontWeight: "700" }}>{msgs}</span>
            <div style={{ marginLeft: "0.5rem" }}>new messages</div>
          </button>
        </Link>
      ) : name == "filter and sort" ? (
        <button className={styles.Button2}>
          <AdjustmentsIcon className={styles.ButtonIcon2} />
          {name}
        </button>
      ) : name == "mute clubhouse" ? (
        <button className={styles.Button3}>
          <VolumeOffIcon className={styles.ButtonIcon} />
          {name}
        </button>
      ) : name == "exit clubhouse" ? (
        <button className={styles.Button3}>
          <LogoutIcon className={styles.ButtonIcon} />
          {name}
        </button>
      ) : name == "book a free chemistry session" ? (
        <button className={styles.Button4}>{name}</button>
      ) : name == "chat" || name == "reply" ? (
        onlyIcon ? (
          <button className={styles.Button5}>
            <img
              src="assets/images/chat.png"
              alt="chat icon"
              className={styles.ButtonIcon3}
            />
          </button>
        ) : (
          <button className={styles.Button5}>
            {name}&nbsp;
            <img
              src="/assets/images/chat.png"
              alt="chat icon"
              className={styles.ButtonIcon3}
            />
          </button>
        )
      ) : name == "got it!" || name == "cool!" ? (
        <button className={styles.Button5}>
          {name}
        </button>
      ) : (
        <button className={styles.Button2}>{name}</button>
      )}
    </>
  );
};

export default ButtonLight;
