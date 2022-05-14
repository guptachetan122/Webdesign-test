import { Typography } from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import { sidebarItems } from "../../../constants";
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
        return pathName == PATH ? (
          <FeedActive className={styles.IconActive} />
        ) : (
          <FeedInactive className={styles.Icon} />
        );

      case "clubhouse":
        return pathName == PATH ? (
          <ChActive className={styles.IconActive} />
        ) : (
          <ChInactive className={styles.Icon} />
        );
      case "superconnections":
        return pathName == PATH ? (
          <ScActive className={styles.IconActive} />
        ) : (
          <ScInactive className={styles.Icon} />
        );
      case "experiences":
        return pathName == PATH ? (
          <ExperienceActive className={styles.IconActive} />
        ) : (
          <ExperienceInactive className={styles.Icon} />
        );
      case "learn":
        return pathName == PATH ? (
          <LearnActive className={styles.IconActive} />
        ) : (
          <LearnInactive className={styles.Icon} />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className={styles.Container}>
        {sidebarItems.map((val) => (
          <ul key={val.id} className={styles.List}>
            <li
              className={
                Router.pathname.split("/")[1] == val.name
                  ? styles.ListItemActive
                  : styles.ListItem
              }
              onClick={() => {
                Router.push(`${val.link}`);
              }}
            >
              {" "}
              <SwitchIcon pathName={val.name} />
              <Text>{val.name}</Text>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
