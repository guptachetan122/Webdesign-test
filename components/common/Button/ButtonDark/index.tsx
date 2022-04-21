import React from "react";
import styles from "./ButtonDark.module.css";
const ButtonDark = ({ name = " "}) => {
  return <button className={styles.Button}>{name}</button>;
};

export default ButtonDark;
