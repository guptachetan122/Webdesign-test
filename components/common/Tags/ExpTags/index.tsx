import React from 'react'
import styles from './ExpTags.module.css'

const ExpTags = () => {
  return (
    <div className={styles.ExpTagsWrapper}>
      <button className={styles.ExpTag}>all</button>
      <button className={styles.ExpTagActive}>masterclass</button>
      <button className={styles.ExpTag}>experiences</button>
      <button className={styles.ExpTag}>clubhouse huddles</button>
      <button className={styles.ExpTag}>online</button>
      <button className={styles.ExpTag}>offline</button>
    </div>
  );
}

export default ExpTags