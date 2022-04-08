import { Radio } from "antd";
import React, { useState } from "react";
import { ExpTags } from "../../../../constants/constants";
import styles from "./ExpTags.module.css";

const ExperiencesTags = () => {
  // let initialArray = [""];
  const [isClicked, setClicked] = useState(false);
  const [array, setArray] = useState(["all"]);

  function clicked(item: string) {
    if (array?.includes(item)) {
      setArray(array?.filter((a) => a !== item));
    } else {
      setArray((initialarray) => [...initialarray, item]);
    }
  }

  return (
    <div className={styles.TagsWrapper}>
      {ExpTags?.map((item) => {
        return (
          <button
            className={array?.includes(item) ? styles.TagActive : styles.Tag}
            key={item}
            onClick={() => clicked(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default ExperiencesTags;
