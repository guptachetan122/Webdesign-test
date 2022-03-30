import Link from "next/link";
import React from "react";
import { CalendarIcon as ExperienceInactive } from "@heroicons/react/outline";
import styles from "./ButtonComponent.module.css";

const Button = ({ pageName = "" }) => {
  return (
    <>
      { pageName == "experience" ? (
        <>
          <button className={styles.BookButton}>
            {" "}
            <ExperienceInactive className={styles.BookIcon} />
            book slot
          </button>
        </>
      ) : null}
    </>
  );
};
export default Button;
