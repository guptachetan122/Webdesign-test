import Link from "next/link";
import React from "react";
import styles from "./ButtonLight.module.css";
import { AdjustmentsIcon } from "@heroicons/react/outline";

const ButtonLight = ({ name = "" , msgs = ""}) => {
    return (
      <>
        {name == "clubhouse" ? (
          <Link href="/clubhouse/id/chat" passHref>
            <button className={styles.ButtonLight}>
              <span style={{ fontWeight: "700" }}>{msgs}</span>new messages
            </button>
          </Link>
        ) : name == "filter and sort" ? (
            <button className={styles.ButtonLight2}><AdjustmentsIcon className={styles.cardIcon}/>{name}</button>
        ) : (
          <button className={styles.ButtonLight2}>{name}</button>
        )}
      </>
    );
};

export default ButtonLight;
