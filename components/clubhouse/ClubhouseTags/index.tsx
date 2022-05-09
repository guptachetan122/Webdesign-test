import React, { useState } from "react";
import { ChTags } from "../../../constants";
import styles from "./ClubhouseTags.module.css";
import { Typography } from "antd";

const { Text } = Typography;

const ClubhouseTags = () => {
  const [viewAll, setViewAll] = useState(false);
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
          {ChTags?.map((tag) => {
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
          <div className={styles.Close} onClick={handleViewAll}>
            ^ close
          </div>
        </div>
      ) : (
        <div>
          {ChTags?.slice(0, 4).map((tag) => {
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
          <Text className={styles.ViewAll} onClick={handleViewAll}>
            view all
          </Text>
        </div>
      )}
    </>
  );
};

export default ClubhouseTags;
