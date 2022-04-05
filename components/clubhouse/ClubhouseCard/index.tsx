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
        <Menu.Item key="1" onClick={unPin}>
          <div className={styles.Menu}>
            <PushpinFilled className={styles.MenuIcon} /> unpin clubhouse
          </div>
        </Menu.Item>
      ) : (
        <Menu.Item key="1" onClick={onPin}>
          <div className={styles.Menu}>
            <PushpinFilled className={styles.MenuIcon} /> pin clubhouse
          </div>
        </Menu.Item>
      )}
      {isMute ? (
        <Menu.Item key="2" onClick={onMute}>
          <div className={styles.Menu}>
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

  return (
    <>
      <div className={styles.Container}>
        <Row className={styles.Row}>
          <Col span={20}>
            <Link href="/clubhouse/id" passHref>
              <a>
                <Text className={styles.TopContent}>
                  simplifying personal finance for women
                </Text>
              </a>
            </Link>
            {isMute ? <VolumeOffIcon className={styles.MenuIcon} /> : null}
            {isPin ? <PushpinFilled className={styles.MenuIcon} /> : null}
          </Col>

          <Col span={4} className={styles.MenuCol}>
            {isJoined ? (
              <Dropdown className={styles.Dropdown} overlay={menu}>
                <button style={{ background: "none" , border : "none"}}>
                  <EllipsisOutlined className={styles.DropdownIcon} />
                </button>
              </Dropdown>
            ) : infoPage ? null : (
              <button className={styles.BadgeButton}>
                <h6 className={styles.Badge}>{badge}</h6>
              </button>
            )}
          </Col>
        </Row>
        {isJoined ? null : (
          <Link href="/clubhouse/id" passHref>
            <a>
              <Row className={styles.DescriptionRow}>
                <Text className={styles.Description}>
                  women playing sports, bindass, lorem Ipsum is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry&apos;s standard du,dummy text of the
                  printing and typesetting industry. ...more
                </Text>
              </Row>
            </a>
          </Link>
        )}
        <Row className={styles.Row}>
          <Col span={3}>
            {" "}
            <Avatar
              className={styles.Avatar}
              src={"/assets/images/Ragini.png"}
            />
          </Col>

          <Col span={10} className={styles.NameCol}>
            <Text className={styles.Name}>ragini das + 121</Text>
          </Col>

          <Col span={10} className={styles.ButtonCol}>
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
              <Row className={styles.FooterWrapper}>
                <Divider className={styles.Divider} />
                <div className={styles.Footer}>
                  <ExperienceInactive className={styles.FooterIcon} />
                  <Text>1 upcoming huddle</Text>
                  <RightOutlined className={styles.FooterIcon} />
                </div>
              </Row>
            </a>
          </Link>
        ) : null}
      </div>
    </>
  );
};

export default ClubhouseCard;
