import React, { useState } from "react";
import { tagsData } from "../../../../constants/constants";
import styles from "./ChTags.module.css";
import { Typography } from "antd";

const { Text } = Typography;

const ChTags = () => {
  const [viewAll, setViewAll] = useState(false);
  const [array, setArray] = useState(["all"]);
  const [val, setVal] = useState("all");

  const handleViewAll = () => {
    setViewAll(!viewAll);
  };

  function clicked(tag: string) {
    if (val == tag) {
      return null;
    } else {
      setVal(tag);
    }
  }

  return (
    <>
      {viewAll ? (
        <div>
          {tagsData.map((tag) => {
            return (
              <button
                className={val == tag ? styles.TagActive : styles.Tag}
                key={tag}
                onClick={() => clicked(tag)}
              >
                {tag}
              </button>
            );
          })}
          <div className={styles.TagLink} onClick={handleViewAll}>
            ^ close
          </div>
        </div>
      ) : (
        <div>
          {tagsData.slice(0, 4).map((tag) => {
            return (
              <button
                className={val == tag ? styles.TagActive : styles.Tag}
                key={tag}
                onClick={() => clicked(tag)}
              >
                {tag}
              </button>
            );
          })}
          <Text className={styles.TagView} onClick={handleViewAll}>
            view all
          </Text>
        </div>
      )}
    </>
  );
};

export default ChTags;
