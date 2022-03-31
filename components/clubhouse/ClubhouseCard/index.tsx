import {
  Avatar,
  Button,
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
import Link from "next/link";
import { VolumeOffIcon } from "@heroicons/react/solid";
import ButtonLight from "../../common/ButtonComponent/ButtonLight";
import ButtonDark from "../../common/ButtonComponent/ButtonDark";
import { CalendarIcon as ExperienceInactive } from "@heroicons/react/outline";
import {
  EllipsisOutlined,
  PushpinFilled,
  RightOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

const ClubhouseCard = ({
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

  console.log(pinnedCh);

  const modalmsg = {
    content: "you can only pin 5 clubhouses",
  };

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

  const menu = () => (
    <Menu style={{ padding: "0" }}>
      {isPin ? (
        <Menu.Item key="1" onClick={unPin} className={styles.Menu}>
          <PushpinFilled className={styles.SidebarIcon4} /> unpin clubhouse
        </Menu.Item>
      ) : (
        <Menu.Item key="1" onClick={onPin} className={styles.Menu}>
          <PushpinFilled className={styles.SidebarIcon4} /> pin clubhouse
        </Menu.Item>
      )}
      {isMute ? (
        <Menu.Item key="2" onClick={onMute} className={styles.Menu}>
          <VolumeOffIcon className={styles.SidebarIcon4} /> unmute clubhouse
        </Menu.Item>
      ) : (
        <Menu.Item key="2" onClick={onMute} className={styles.Menu}>
          <VolumeOffIcon className={styles.SidebarIcon4} /> mute clubhouse
        </Menu.Item>
      )}
    </Menu>
  );

  return (
    <>
      <div className={styles.ChCardcontainer}>
        <Row className={styles.ChCardrow}>
          <Col span={20}>
            <Link href="/clubhouse/id" passHref>
              <a>
                <Text className={styles.ChCardTopContent}>
                  simplifying personal finance for women
                </Text>
              </a>
            </Link>
            {isMute ? <VolumeOffIcon className={styles.SidebarIcon4} /> : null}
            {isPin ? <PushpinFilled className={styles.SidebarIcon4} /> : null}
          </Col>
          <Col span={4} className={styles.ChCardcol2}>
            {isJoined ? (
              <Dropdown className={styles.Dropdown} overlay={menu}>
                <Button style={{ background: "none" }}>
                  <EllipsisOutlined className={styles.threedots} />
                </Button>
              </Dropdown>
            ) : ( infoPage ? null :
              <button className={styles.ChCardBadge}>
                <h6 className={styles.ChCardBadgeText}>{badge}</h6>
              </button>
            )}
          </Col>
        </Row>
        {isJoined ? null : (
          <Link href="/clubhouse/id" passHref>
            <a>
              <Row className={styles.ChCardrow3}>
                <Text className={styles.ChCardDescription}>
                  women playing sports, bindass, lorem Ipsum is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry&apos;s standard du,dummy text of the
                  printing and typesetting industry. ...more
                </Text>
              </Row>
            </a>
          </Link>
        )}
        <Row className={styles.ChCardrow}>
          <Col span={3}>
            {" "}
            <Avatar
              className={styles.ChCardAvatar}
              src={"/assets/images/Ragini.png"}
            />
          </Col>
          <Col span={11} className={styles.ChCardcol}>
            <Text>ragini das</Text>
            <Text className={styles.ChCardText}>+ 121</Text>
          </Col>
          <Col span={10} className={styles.ChCardcol2}>
            {isJoined ? (
              <ButtonLight msgs="121" name="clubhouse" />
            ) : infoPage ? null : (
              <ButtonDark name="join clubhouse" />
            )}
          </Col>
        </Row>
        {upcomingHuddle ? (
          <Link href="#">
            <a>
              {" "}
              <Row className={styles.ChCardrow2}>
                <Divider className={styles.Divider} />
                <ExperienceInactive className={styles.SidebarIcon2} />
                1 upcoming huddle
                <RightOutlined className={styles.SidebarIcon3} />
              </Row>
            </a>
          </Link>
        ) : null}
      </div>
    </>
  );
};

export default ClubhouseCard;
