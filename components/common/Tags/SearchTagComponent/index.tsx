import React, { useState } from "react";
import { tagsData } from "../../../../constants/constants";
import styles from "./SearchTags.module.css";

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
          <div className={styles.TagsBody}>
            {tagsData.map((tag) => {
              return (
                <>
                  <button
                    className={
                      tag.checked
                        ? styles.TagsButton2
                        : styles.TagsButton
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
          <div className={styles.TagsLinkWrapper}>
            <a className={styles.TagsLink} onClick={handleViewAll}>
             ^ close
            </a>
          </div>
        </>
      ) : (
        <>
          <div className={styles.TagsBody}>
            {tagsData.slice(0, 4).map((tag) => {
              return (
                <button
                  className={
                    tag.checked
                      ? styles.TagsButton2
                      : styles.TagsButton
                  }
                  key={tag.id}
                >
                  {tag.name}
                </button>
              );
            })}
            <a className={styles.TagsLink} onClick={handleViewAll}>
              view all
            </a>
          </div>
        </>
      )}
    </>
  );
};

export default SearchTags;
