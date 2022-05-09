import React from 'react'
import styles from "./FeedInput.module.css";
import {
  PencilAltIcon,
  PhotographIcon,
  VideoCameraIcon,
  ChartBarIcon,
} from "@heroicons/react/outline";
import { Input } from 'antd';

const FeedInput = () => {
  return (
    <div className={styles.Container}>
      <button className={styles.Input}>
        <PencilAltIcon className={styles.Icon} />
        <div>create a new post or poll</div>
      </button>
      <div className={styles.TabWrapper}>
        <div className={styles.Tab}>
          <PhotographIcon className={styles.TabIcon} /> photo
        </div>
        <div className={styles.Tab}>
          <VideoCameraIcon className={styles.TabIcon} /> video
        </div>
        <div className={styles.Tab}>
          <ChartBarIcon className={styles.TabIcon} /> poll
        </div>
      </div>
    </div>
  );
}

export default FeedInput