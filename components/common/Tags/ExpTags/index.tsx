import React from 'react'
import styles from './ExpTags.module.css'

const ExpTags = () => {
  return (
    <div className={styles.TagsWrapper}>
      <button className={styles.Tag}>all</button>
      <button className={styles.TagActive}>masterclass</button>
      <button className={styles.Tag}>experiences</button>
      <button className={styles.Tag}>clubhouse huddles</button>
      <button className={styles.Tag}>online</button>
      <button className={styles.Tag}>offline</button>
    </div>
  );
}

export default ExpTags