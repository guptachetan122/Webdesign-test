/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import styles from "./ButtonLight.module.css";
import {
  AdjustmentsIcon,
  VolumeOffIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import { Dropdown, Menu, Row, Typography } from "antd";

const { Text } = Typography;

const ButtonLight = ({ name = "", msgs = "", onlyIcon = false }) => {
  const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const menu = () => {
    return (
      <Menu className={styles.MenuWrapper}>
        {n.map((i) => (
          <Menu.Item key={i} className={styles.Menu}>
            <Row className={styles.MenuText}>
              you&apos;ve got a new superconnect in sushruta basak! tap to meet
              her
            </Row>
            <Row className={styles.MenuSubText}>7 hours ago</Row>
          </Menu.Item>
        ))}
      </Menu>
    );
  };

  return (
    <>
      {name == "clubhouse" ? (
        <Link href="/clubhouse/id/chat" passHref>
          <button className={styles.ChButton}>
            <span style={{ fontWeight: "700" }}>{msgs}</span>
            <div style={{ marginLeft: "0.5rem" }}>new messages</div>
          </button>
        </Link>
      ) : null}

      {name == "filter and sort" ? (
        <div className={styles.FilterButtonWrapper}>
          <button className={styles.FilterButton}>
            <AdjustmentsIcon className={styles.FilterIcon} />
            {name}
          </button>
        </div>
      ) : null}

      {name == "mute clubhouse" ? (
        <button className={styles.MuteButton}>
          <VolumeOffIcon className={styles.MuteIcon} />
          {name}
        </button>
      ) : null}

      {name == "exit clubhouse" ? (
        <button className={styles.MuteButton}>
          <LogoutIcon className={styles.MuteIcon} />
          {name}
        </button>
      ) : null}

      {name == "book a free chemistry session" ? (
        <button className={styles.ChemButton}>{name}</button>
      ) : null}

      {name == "chat" || name == "reply" ? (
        onlyIcon ? (
          <button className={styles.ChatButton}>
            <img
              src="assets/images/chat.png"
              alt="chat icon"
              className={styles.ChatIcon}
            />
          </button>
        ) : (
          <button className={styles.ChatButton}>
            {name}&nbsp;
            <img
              src="/assets/images/chat.png"
              alt="chat icon"
              className={styles.ChatIcon}
            />
          </button>
        )
      ) : null}

      {name == "got it!" || name == "cool!" ? (
        <button className={styles.ChatButton}>{name}</button>
      ) : null}
      {
        (name == "" ? (
          <button className={styles.FilterButton}>{name}</button>
        ) : null)
      }
    </>
  );
};

export default ButtonLight;
