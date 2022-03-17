import Link from 'next/link';
import React from 'react'
import ScModal from '../Modal/ScModal';
import { CalendarIcon as ExperienceInactive } from "@heroicons/react/outline";
import { LocationMarkerIcon , CurrencyDollarIcon } from '@heroicons/react/outline';
import styles from './ButtonComponent.module.css'
import { DollarCircleOutlined } from '@ant-design/icons';

const Button = ({isJoined = false ,isConnect = false , title = '' , pageName = ''}) => {
  return (
    <>
      {pageName == "clubhouseinfo" ? (
        isJoined == false ? (
          <>
            <Link href="/clubhouse/id/chat" passHref>
              <button className={styles.ButtonLight}>view messages</button>
            </Link>
            <button className={styles.ButtonLight}>mute clubhouse</button>
            <button className={styles.ButtonLight}>exit clubhouse</button>
          </>
        ) : (
          <button className={styles.ButtonDark}>join clubhouse</button>
        )
      ) : pageName == "clubhouse" ? (
        <>
          {isJoined ? (
            <Link href="/clubhouse/id/chat" passHref>
              <button className={styles.ButtonLight}>
                <span style={{ fontWeight: "700" }}>100</span>new messages
              </button>
            </Link>
          ) : (
            <button className={styles.ButtonDark}>join clubhouse</button>
          )}
        </>
      ) : pageName == "recommendations" ? (
        <>
          <ScModal />
        </>
      ) : pageName == "my network" ? (
        <>
          <div className={styles.ButtonWrapper}>
            <button className={styles.ButtonLight2}>Chat</button>
          </div>
        </>
      ) : pageName == "chats" ? (
        <>
          <div className={styles.ButtonWrapper}>
            <button className={styles.ButtonLight2}>reply</button>
          </div>
        </>
      ) : pageName == "experience" ? (
        <>
          <button className={styles.BookButton}>
            {" "}
            <ExperienceInactive className={styles.ButtonIcon} />
            book slot
          </button>
        </>
      ) : pageName == "label" ? (
        <>
          <div className={styles.LabelButtonWrapper}>
            <button className={styles.LabelButton}>
              {" "}
              <LocationMarkerIcon className={styles.LabelButtonIcon} />
              offline
            </button>
            <button className={styles.LabelButton}>
              {" "}
              <DollarCircleOutlined className={styles.LabelButtonIcon} />
              paid
            </button>
          </div>
        </>
      ) : pageName == "experienceinfo" ? (
        <>
          <button className={styles.BookInfoButton}>
            {" "}
            <ExperienceInactive className={styles.ButtonInfoIcon} />
            book slot and pay
          </button>
        </>
      ) : null}
    </>
  );
}

export default Button