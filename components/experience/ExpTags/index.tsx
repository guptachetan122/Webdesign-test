import React from 'react'
import styles from './ExpTags.module.css'

const ExpTags = () => {
  return (
    <div className={styles.buttonsWrapper}>
      <button className={styles.buttonBody}>all</button>
      <button className={styles.buttonBodyActive}>masterclass</button>
      <button className={styles.buttonBody}>experiences</button>
      <button className={styles.buttonBody}>clubhouse huddles</button>
      <button className={styles.buttonBody}>online</button>
      <button className={styles.buttonBody}>offline</button>
    </div>
  );
}

export default ExpTags