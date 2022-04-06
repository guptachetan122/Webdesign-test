import React, { useState } from "react";
import { tagsData } from "../../../../constants/constants";
import styles from "./SearchTags.module.css";
import { Typography } from "antd";

const { Text } = Typography;

const SearchTags = () => {
  const [viewAll, setViewAll] = useState(false);

  const handleViewAll = () => {
    setViewAll(!viewAll);
  };

  const handlecheck = (tag: any) => { };
  
  return (
    <>
      {viewAll ? (
        <>
          <div>
            {tagsData.map((tag) => {
              return (
                <>
                  <button
                    className={
                      tag.checked
                        ? styles.TagActive
                        : styles.Tag
                    }
                    key={tag.id}
                    onClick={() => handlecheck(tag)}
                  >
                    {tag.name}
                  </button>
                </>
              );
            })}
          </div>
          <div className={styles.TagLinkWrapper}>
            <Text className={styles.TagLink} onClick={handleViewAll}>
             ^ close
            </Text>
          </div>
        </>
      ) : (
        <>
          <div>
            {tagsData.slice(0, 4).map((tag) => {
              return (
                <button
                  className={
                    tag.checked
                      ? styles.TagActive
                      : styles.Tag
                  }
                  key={tag.id}
                >
                  {tag.name}
                </button>
              );
            })}
            <Text className={styles.TagLink} onClick={handleViewAll}>
              view all
            </Text>
          </div>
        </>
      )}
    </>
  );
};

export default SearchTags;
