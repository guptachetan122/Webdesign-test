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

const ButtonLight = ({ name = "", msgs = "" }) => {
  return (
    <>
      {name == "clubhouse" ? (
        <Link href="/clubhouse/id/chat" passHref>
          <button className={styles.ButtonLight}>
            <span style={{ fontWeight: "700" }}>{msgs}</span>
            <Text style={{ marginLeft: "1rem" }}>new messages</Text>
          </button>
        </Link>
      ) : name == "filter and sort" ? (
        <button className={styles.ButtonLight2}>
          <AdjustmentsIcon className={styles.ButtonIcon2} />
          {name}
        </button>
      ) : name == "mute clubhouse" ? (
        <button className={styles.ButtonLight3}>
          <VolumeOffIcon className={styles.ButtonIcon} />
          {name}
        </button>
      ) : name == "exit clubhouse" ? (
        <button className={styles.ButtonLight3}>
          <LogoutIcon className={styles.ButtonIcon} />
          {name}
        </button>
      ) : name == "book a free chemistry session" ? (
        <button className={styles.ButtonLight4}>{name}</button>
      ) : ( 
        <button className={styles.ButtonLight2}>{name}</button>
      )}
    </>
  );
};

export default ButtonLight;
