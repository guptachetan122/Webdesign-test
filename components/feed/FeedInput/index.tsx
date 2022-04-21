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
        <PencilAltIcon className={styles.InputIcon} />
        <div>create a new post or poll</div>
      </button>
      {/* <Input
        className={styles.Input}
        prefix={<PencilAltIcon className={styles.InputIcon} />}
        placeholder={`create a new post or poll`}
      /> */}
      <div className={styles.InputTabWrapper}>
        <div className={styles.InputTab}>
          <PhotographIcon className={styles.InputTabIcon} /> photo
        </div>
        <div className={styles.InputTab}>
          <VideoCameraIcon className={styles.InputTabIcon} /> video
        </div>
        <div className={styles.InputTab}>
          <ChartBarIcon className={styles.InputTabIcon} /> poll
        </div>
      </div>
    </div>
  );
}

export default FeedInput