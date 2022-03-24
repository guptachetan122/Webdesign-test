import { Card , Typography} from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import { sidebarItems } from "../../constants/constants";
import { AcademicCapIcon as LearnActive } from "@heroicons/react/solid";
import { AcademicCapIcon as LearnInactive } from "@heroicons/react/outline";
import { RssIcon as FeedInactive } from "@heroicons/react/outline";
import { UserGroupIcon as ChInactive } from "@heroicons/react/outline";
import { LightningBoltIcon as ScInactive } from "@heroicons/react/outline";
import { CalendarIcon as ExperienceInactive } from "@heroicons/react/outline";
import { RssIcon as FeedActive } from "@heroicons/react/solid";
import { UserGroupIcon as ChActive } from "@heroicons/react/solid";
import { LightningBoltIcon as ScActive } from "@heroicons/react/solid";
import { CalendarIcon as ExperienceActive } from "@heroicons/react/solid";
import ClubhouseModal from "../Modal/ClubhouseModal";

const { Text } = Typography;
interface SidebarProps {
  pageName: string;
}
const Sidebar = ({ pageName }: SidebarProps) => {
  const Router = useRouter();

  const SwitchIcon = ({ pathName }: any) => {
    const PATH = Router.pathname.split("/")[1];

    switch (pathName) {
      case "feed":
        return PATH == pathName ? (
          <FeedActive className={styles.SidebarIconActive} />
        ) : (
          <FeedInactive className={styles.SidebarIcon} />
        );

      case "clubhouse":
        return PATH == pathName ? (
          <ChActive className={styles.SidebarIconActive} />
        ) : (
          <ChInactive className={styles.SidebarIcon} />
        );
      case "superconnections":
        return PATH == pathName ? (
          <ScActive className={styles.SidebarIconActive} />
        ) : (
          <ScInactive className={styles.SidebarIcon} />
        );
      case "experiences":
        return PATH == pathName ? (
          <ExperienceActive className={styles.SidebarIconActive} />
        ) : (
          <ExperienceInactive className={styles.SidebarIcon} />
        );
      case "learn":
        return PATH == pathName ? (
          <LearnActive className={styles.SidebarIconActive} />
        ) : (
          <LearnInactive className={styles.SidebarIcon} />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className={styles.SidebarCardStyle}>
        {sidebarItems.map((val) => (
          <ul key={val.id} className={styles.SidebarList}>
            <li
              className={
                Router.pathname.split("/")[1] == val.pathname
                  ? styles.SidebarListItemActive
                  : styles.SidebarListItem
              }
              onClick={() => {
                Router.push(`${val.link}`);
              }}
            >
              
                {" "}
                <SwitchIcon pathName={val.pathname} />
                <Text>{val.name}</Text>
             
            </li>
          </ul>
        ))}

        {pageName == "feed" ? (
          /* This for feed */
          <div className={styles.SidebarButtonWrapper}>
            <button className={styles.SidebarButton}> create a post </button>
          </div>
        ) : pageName == "clubhouse" ? (
          /* This for Clubhouse */
          <>
            <div className={styles.SidebarButtonWrapper}>
              <button className={styles.SidebarButton}>
                {" "}
                + create Clubhouse
              </button>
            </div>
            <ClubhouseModal />
          </>
        ) : null}
      </div>
    </>
  );
};

export default Sidebar;
