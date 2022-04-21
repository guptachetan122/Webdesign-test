import { Divider, Row, Typography } from "antd";
import React, { useState } from "react";
import styles from "./ClubhouseDetail.module.css";
import { UserGroupIcon as ChInactive } from "@heroicons/react/solid";
import ButtonLight from "../../common/Button/ButtonLight";
import ButtonDark from "../../common/Button/ButtonDark";
import ClubhouseCard from "../ClubhouseCard";
import ClubhouseMember from "../ClubhouseMember";
const { Text } = Typography;

const ClubhouseDetail = ({ isJoined = false }) => {
  const [isClicked, SetisClicked] = useState(false);
  const [viewAll, SetviewAll] = useState(false);
  const [isJoin, SetisJoin] = useState(isJoined);
  const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function onPress() {
    SetisClicked(!isClicked);
  }

  function handleViewAll() {
    SetviewAll(!viewAll);
  }
  return (
    <>
      <ClubhouseCard infoPage />
      <div className={styles.ButtonWrapper}>
        {isJoin ? (
          <>
            <Row>
                <ButtonLight name="mute clubhouse" />
                <ButtonLight name="exit clubhouse" />
            </Row>
          </>
        ) : (
          <Row>
            <ButtonDark name="join clubhouse" />
          </Row>
        )}
      </div>
      <Divider className={styles.InfoDivider} />
      <div className={styles.MemberInfoWrapper}>
        <Row>
          <ChInactive className={styles.InfoIcon} />
          <Text className={styles.InfoMembers}>121 members</Text>
        </Row>
      </div>
      {n.slice(0, 3).map((i) => {
        return (
          <>
           <ClubhouseMember />
          </>
        );
      })}
      {viewAll ? (
        n.slice(3).map((i) => {
          return (
            <>
             <ClubhouseMember />
            </>
          );
        })
      ) : (
        <div className={styles.InfoLink} onClick={handleViewAll}>
          view all members 
        </div>
      )}
    </>
  );
};

export default ClubhouseDetail;
