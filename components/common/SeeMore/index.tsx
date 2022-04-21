import React, { useState } from "react";
import styles from "./SeeMore.module.css";

const SeeMore = ({ children }: any) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className={styles.PostText}>
      {isReadMore ? text.slice(0, 180) : text}
      <br />
      <span onClick={toggleReadMore} className={styles.ReadMore}>
        {text.length > 180 ? (isReadMore ? " see more" : " show less") : null}
      </span>
    </div>
  );
};

export default SeeMore;
