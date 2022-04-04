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
          <div className={styles.ChCardMenu}>
            <PushpinFilled className={styles.ChCardMenuIcon} /> unpin clubhouse
          </div>
        </Menu.Item>
      ) : (
        <Menu.Item key="1" onClick={onPin}>
          <div className={styles.ChCardMenu}>
            <PushpinFilled className={styles.ChCardMenuIcon} /> pin clubhouse
          </div>
        </Menu.Item>
      )}
      {isMute ? (
        <Menu.Item key="2" onClick={onMute}>
          <div className={styles.ChCardMenu}>
            <VolumeOffIcon className={styles.ChCardMenuIcon} /> unmute clubhouse
          </div>
        </Menu.Item>
      ) : (
        <Menu.Item key="2" onClick={onMute}>
          <div className={styles.ChCardMenu}>
            <VolumeOffIcon className={styles.ChCardMenuIcon} /> mute clubhouse
          </div>
        </Menu.Item>
      )}
    </Menu>
  );

  return (
    <>
      <div className={styles.ChCardContainer}>
        <Row className={styles.ChCardRow}>
          <Col span={20}>
            <Link href="/clubhouse/id" passHref>
              <a>
                <Text className={styles.ChCardTopContent}>
                  simplifying personal finance for women
                </Text>
              </a>
            </Link>
            {isMute ? <VolumeOffIcon className={styles.ChCardMenuIcon} /> : null}
            {isPin ? <PushpinFilled className={styles.ChCardMenuIcon} /> : null}
          </Col>

          <Col span={4} className={styles.ChCardMenuCol}>
            {isJoined ? (
              <Dropdown className={styles.ChCardDropdown} overlay={menu}>
                <button style={{ background: "none" , border : "none"}}>
                  <EllipsisOutlined className={styles.ChCardDropdownIcon} />
                </button>
              </Dropdown>
            ) : infoPage ? null : (
              <button className={styles.ChCardBadgeButton}>
                <h6 className={styles.ChCardBadge}>{badge}</h6>
              </button>
            )}
          </Col>
        </Row>
        {isJoined ? null : (
          <Link href="/clubhouse/id" passHref>
            <a>
              <Row className={styles.ChCardDescriptionRow}>
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
        <Row className={styles.ChCardRow}>
          <Col span={3}>
            {" "}
            <Avatar
              className={styles.ChCardAvatar}
              src={"/assets/images/Ragini.png"}
            />
          </Col>

          <Col span={10} className={styles.ChCardNameCol}>
            <Text className={styles.ChCardName}>ragini das + 121</Text>
          </Col>

          <Col span={10} className={styles.ChCardButtonCol}>
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
              <Row className={styles.ChCardFooterWrapper}>
                <Divider className={styles.ChCardDivider} />
                <div className={styles.ChCardFooter}>
                  <ExperienceInactive className={styles.ChCardFooterIcon} />
                  <Text>1 upcoming huddle</Text>
                  <RightOutlined className={styles.ChCardFooterIcon} />
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
