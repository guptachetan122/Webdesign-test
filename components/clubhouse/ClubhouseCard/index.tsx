import {
  Avatar,
  Col,
  Divider,
  Dropdown,
  Menu,
  Modal,
  Row,
  Typography,
} from "antd";
import React, { useState } from "react";
import styles from "./ClubhouseCard.module.css";
import { VolumeOffIcon, DotsHorizontalIcon } from "@heroicons/react/solid";
import ButtonLight from "../../common/ButtonComponent/ButtonLight";
import ButtonDark from "../../common/ButtonComponent/ButtonDark";
import { CalendarIcon as ExperienceInactive } from "@heroicons/react/outline";
import {
  EllipsisOutlined,
  PushpinFilled,
  RightOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";

const { Text } = Typography;

const ClubhouseCard = ({
  isFounder = false,
  isJoined = false,
  isPinned = false,
  isMuted = false,
  upcomingHuddle = false,
  badge = "",
  pinned = 5,
  infoPage = false,
}) => {
  const [isPin, setPin] = useState(isPinned);
  const [isMute, setMute] = useState(isMuted);
  const [pinnedCh, setPinnedCh] = useState(pinned);
  const router = useRouter();

  const modalmsg = {
    content: "you can only pin 5 clubhouses",
  };

  function goToChInfo() {
    {
      infoPage ? null : router.push("/clubhouse/id");
    }
  }

   function goToExpInfo(e:any) {
     {
       e.stopPropagation();
       router.push("/experiences/id");
     }
   }

  function goToChChat(e: any) {
    e.stopPropagation();
    router.push("/clubhouse/id/chat");
  }

  function onPin() {
    if (pinnedCh < 5 && pinnedCh > 0) {
      setPin(true);
      setPinnedCh(pinnedCh + 1);
    } else {
      Modal.info(modalmsg);
    }
  }

  function unPin() {
    setPin(false);
    setPinnedCh(pinnedCh - 1);
  }

  function onMute() {
    setMute(!isMute);
  }


  const menu = () => {
   return (
     <Menu >
       {isPin ? (
         <Menu.Item key="1" onClick={unPin} className={styles.Menu}>
           <div>
             <PushpinFilled className={styles.MenuIcon} /> unpin clubhouse
           </div>
         </Menu.Item>
       ) : (
         <Menu.Item key="1" onClick={onPin} className={styles.Menu}>
           <div>
             <PushpinFilled className={styles.MenuIcon} /> pin clubhouse
           </div>
         </Menu.Item>
       )}
       {isMute ? (
         <Menu.Item key="2" onClick={onMute} className={styles.Menu}>
           <div>
             <VolumeOffIcon className={styles.MenuIcon} /> unmute clubhouse
           </div>
         </Menu.Item>
       ) : (
         <Menu.Item key="2" onClick={onMute}>
           <div className={styles.Menu}>
             <VolumeOffIcon className={styles.MenuIcon} /> mute clubhouse
           </div>
         </Menu.Item>
       )}
     </Menu>
   );
  };

  return (
    <>
      {" "}
      <div className={styles.Container} onClick={goToChInfo}>
        <Row className={styles.Row}>
          <Col span={18} onClick={goToChInfo}>
            <div className={styles.TopContent}>
              simplifying personal finance for women in tech &ensp;
              {isMute ? <VolumeOffIcon className={styles.MenuIcon} /> : null}
              {isPin ? <PushpinFilled className={styles.MenuIcon} /> : null}
            </div>
          </Col>

          <Col
            span={6}
            className={styles.MenuCol}
          >
            {isJoined ? (
              <Dropdown overlay={menu} trigger={["click"]}>
                <DotsHorizontalIcon
                  className={styles.DropdownIcon}
                  onClick={(e) => e.stopPropagation()}
                />
              </Dropdown>
            ) : infoPage ? null : (
              <button className={styles.BadgeButton}>
                <h6 className={styles.Badge}>{badge}</h6>
              </button>
            )}
          </Col>
        </Row>{" "}
        {isFounder ? (
          <Row className={styles.Row}>
            <Col span={8} className={styles.PendingWrap}>
              <Text className={styles.PendingText}>5 pending requests</Text>
            </Col>
            <Col span={8} onClick={goToChInfo}></Col>
            <Col span={8} className={styles.PendingButton}>
              <button className={styles.BadgeButton}>
                <h6 className={styles.Badge}>Founder</h6>
              </button>
            </Col>
          </Row>
        ) : null}
        {isJoined ? null : (
          <Row className={styles.DescriptionRow} onClick={goToChInfo}>
            <Text className={styles.Description}>
              women playing sports, bindass, lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the
              industry&apos;s standard du,dummy text of the printing and
              typesetting industry.....
            </Text>
          </Row>
        )}
        <Row className={styles.Row} onClick={goToChInfo}>
          <Col span={3}>
            {" "}
            <Avatar
              className={styles.Avatar}
              src={"/assets/images/Ragini.png"}
            />
          </Col>

          <Col span={11} className={styles.NameCol}>
            <Text className={styles.Name}>ragini das + 121</Text>
          </Col>

          <Col span={10} className={styles.ButtonCol}>
            {isJoined ? (
              <div onClick={goToChChat}>
                <ButtonLight msgs="121" name="clubhouse" />
              </div>
            ) : infoPage ? null : (
              <ButtonDark name="join clubhouse" />
            )}
          </Col>
        </Row>
        {upcomingHuddle ? (
          <Row className={styles.FooterWrapper} onClick={goToExpInfo}>
            <Divider className={styles.Divider} />
            <div className={styles.Footer}>
              <ExperienceInactive className={styles.FooterIcon} />
              1 upcoming huddle
              <RightOutlined className={styles.FooterIcon} />
            </div>
          </Row>
        ) : null}
      </div>
    </>
  );
};

export default ClubhouseCard;
