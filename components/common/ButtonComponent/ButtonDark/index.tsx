import React from "react";
import styles from "./ButtonDark.module.css";
const ButtonDark = ({ name = " ", icon = "" }) => {
  return <button className={styles.ButtonDark}>{name}</button>;
};

export default ButtonDark;
