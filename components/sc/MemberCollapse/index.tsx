import { Collapse } from "antd";
import React, { useState } from "react";
import Member from "../Member";
import MemberRecommendations from "../MemberRecommendation";
import styles from "./MemberCollapse.module.css";

const { Panel } = Collapse;

const MemberCollapse = () => {
  const [val, setVal] = useState(1);
  function callback(key: any) {
      setVal(key);
  }

  return (
    <>
      {" "}
      <Collapse accordion ghost defaultActiveKey={["1"]} onChange={callback}>
        <Panel
          header={
            <MemberRecommendations
              title="trending members 🔥"
              subTitle="super active members. not all heroes wear capes."
              isClicked={val == 1 ? true : false}
            />
          }
          showArrow={false}
          key="1"
          className={styles.Panel}
        >
          {" "}
          <Member />
          <Member />
          <Member />
          <Member />{" "}
        </Panel>
        <Panel
          header={
            <MemberRecommendations
              title="members from your city 📍"
              subTitle="for all those social meetups."
              isClicked={val == 2 ? true : false}
            />
          }
          showArrow={false}
          key="2"
        >
          {" "}
          <Member />
          <Member />
          <Member />
          <Member />{" "}
        </Panel>
        <Panel
          header={
            <MemberRecommendations
              title="members from your organization 💼"
              subTitle="no office, no problem. say hi on leap!"
              isClicked={val == 3 ? true : false}
            />
          }
          showArrow={false}
          key="3"
        >
          {" "}
          <Member />
          <Member />
          <Member />
          <Member />{" "}
        </Panel>
        <Panel
          header={
            <MemberRecommendations
              title="recent members to superconnect with 🆕"
              subTitle="make the freshers feel welcome!."
              isClicked={val == 4 ? true : false}
            />
          }
          showArrow={false}
          key="4"
        >
          {" "}
          <Member />
          <Member />
          <Member />
          <Member />{" "}
        </Panel>
        <Panel
          header={
            <MemberRecommendations
              title="members to reconnect with 🕯️"
              subTitle="rekindle the old love."
              isClicked={val == 5 ? true : false}
            />
          }
          showArrow={false}
          key="5"
        >
          {" "}
          <Member />
          <Member />
          <Member />
          <Member />{" "}
        </Panel>
      </Collapse>
    </>
  );
};

export default MemberCollapse;
