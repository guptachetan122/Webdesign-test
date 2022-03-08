import React, { useState } from "react";
import { tagsData } from "../../constants/constants";
import styles from "./SearchTags.module.css";

const SearchTags = () => {
  const [viewAll, setViewAll] = useState(false);

  const handleViewAll = () => {
    setViewAll(!viewAll);
    };
    
    const array = tagsData;
    const handlecheck = (tag: any) => {
        
    }
  return (
    <>
          {viewAll ? (
              <>
                  <div className={styles.searchTagsBody}>
                      {tagsData.map((tag) => {
                          return (
                              <>
                                  <button
                                      className={
                                          tag.checked
                                              ? styles.searchTagsButton2
                                              : styles.searchTagsButton
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
                          <div className={styles.searchTagsLink}>
                      <a
                          className={styles.searchTagsLink}
                          onClick={handleViewAll}
                      >
                          view less
                      </a>
                      </div>
        </>
      ) : (
        <>
          <div className={styles.searchTagsBody}>
            {tagsData.slice(0, 4).map((tag) => {
              return (
                <button
                  className={
                    tag.checked
                      ? styles.searchTagsButton2
                      : styles.searchTagsButton
                  }
                  key={tag.name}
                >
                  {tag.name}
                </button>
              );
            })}
            <a className={styles.searchTagsLink} onClick={handleViewAll}>
              view all
            </a>
          </div>
        </>
      )}
    </>
  );
};

export default SearchTags;
