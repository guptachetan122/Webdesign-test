import React, { useState } from "react";
import { ExpTagsData } from "../../../../constants/constants";
import styles from "./ExpTags.module.css";

const ExpTags = () => {
  let initialArray = [""];
  const [isClicked, setClicked] = useState(false);
  const [array, setArray] = useState(initialArray);
  const [val, setVal] = useState("");

  function clicked(e: any) {
    setVal(e.target.id)
    setArray(array => [...array, val]);
    setClicked(true);
    console.log(e.target.id);
    console.log(array);
  }
  return (
    <div className={styles.TagsWrapper}>
      {/* <button className={styles.Tag}>all</button>
      <button className={styles.TagActive}>masterclass</button>
      <button className={styles.Tag}>experiences</button>
      <button className={styles.Tag}>clubhouse huddles</button>
      <button className={styles.Tag}>online</button>
      <button className={styles.Tag}>offline</button> */}
      {ExpTagsData?.map((item) => (
        <button
          className={isClicked ? styles.TagActive : styles.Tag}
          key={item}
          id={item}
          onClick={clicked}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default ExpTags;
