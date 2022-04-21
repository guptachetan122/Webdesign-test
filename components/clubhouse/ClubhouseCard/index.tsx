/* eslint-disable @next/next/no-img-element */
import {
  Avatar,
  Col,
  Dropdown,
  Menu,
  Row,
  Typography,
} from "antd";
import React, { useState } from "react";
import styles from "./ClubhouseCard.module.css";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import ButtonLight from "../../common/Button/ButtonLight";
import ButtonDark from "../../common/Button/ButtonDark";
import { CalendarIcon as ExperienceInactive , ChevronRightIcon} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { PinMsg , UnpinMsg , MaxMsg} from "../../common/ToastMsg";

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

  function goToChInfo() {
    {
      infoPage ? null : router.push("/clubhouse/id");
    }
  }

  function goToExpInfo(e: any) {
    {
      e.stopPropagation();
      router.push("/experiences/id");
    }
  }

  function goToChChat(e: any) {
    e.stopPropagation();
    router.push("/clubhouse/id/chat");
  }

  function onPin(ChName: string) {
    if (pinnedCh < 5 && pinnedCh > 0) {
      setPin(true);
      setPinnedCh(pinnedCh + 1);
      toast(<PinMsg />, {
        position: "top-center",
        width : "fit-content",
      });
    } else {
      toast(<MaxMsg />, {
        position: "top-center",
      });
    }
  }

  function unPin() {
    setPin(false);
    setPinnedCh(pinnedCh - 1);
    toast(<UnpinMsg />, {
      position: "top-center",
    });
  }

  function onMute() {
    setMute(!isMute);
  }

  const menu = (ChName: string) => {
    return (
      <Menu className={styles.MenuWrapper}>
        {isPin ? (
          <>
            <Menu.Item key="1" onClick={unPin} className={styles.Menu}>
              <div>
                <img
                  src="/assets/images/pin-black.png"
                  alt="unpin image"
                  className={styles.MenuIcon}
                />{" "}
                unpin clubhouse
              </div>
            </Menu.Item>
          </>
        ) : (
          <Menu.Item
            key="1"
            onClick={() => onPin(ChName)}
            className={styles.Menu}
          >
            <div>
              <img
                src="/assets/images/pin-black.png"
                alt="pin image"
                className={styles.MenuIcon}
              />{" "}
              pin clubhouse
            </div>
          </Menu.Item>
        )}
        {isMute ? (
          <Menu.Item key="2" onClick={onMute} className={styles.Menu}>
            <div>
              <img
                src="/assets/images/unmute-black.png"
                alt="unmute image"
                className={styles.MenuIcon}
              />{" "}
              unmute clubhouse
            </div>
          </Menu.Item>
        ) : (
          <Menu.Item key="2" onClick={onMute} className={styles.Menu}>
            <div>
              <img
                src="/assets/images/mute-black.png"
                alt="mute image"
                className={styles.MenuIcon}
              />{" "}
              mute clubhouse
            </div>
          </Menu.Item>
        )}
      </Menu>
    );
  };

  return (
    <>
      {" "}
      <div className={styles.Container}>
        <Row className={styles.Row}>
          <Col span={18} onClick={goToChInfo}>
            <div className={styles.TopContent}>
              simplifying personal finance for women&ensp;
              {isMute ? (
                <img
                  src="/assets/images/mute-grey.png"
                  alt="mute image"
                  className={styles.TopContentIcon}
                />
              ) : null}
              {isPin ? (
                <img
                  src="/assets/images/pin-grey.png"
                  alt="pin image"
                  className={styles.TopContentIcon}
                />
              ) : null}
            </div>
          </Col>

          <Col span={6} className={styles.MenuColumn}>
            {isJoined ? (
              <Dropdown
                overlay={() => menu("simplifying personal finance for women")}
                trigger={["click"]}
                className={styles.Dropdown}
              >
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
            <Col span={8} className={styles.PendingWrapper}>
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
          {/* <Col span={3}> </Col> */}

          <Col span={14} className={styles.NameColumn}>
            <Avatar
              className={styles.Avatar}
              src={"/assets/images/Ragini.png"}
            />
            <div className={styles.Name}>ragini das + 121</div>
          </Col>

          <Col span={10} className={styles.ButtonColumn}>
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
            {/* <Divider className={styles.Divider} /> */}
            <div className={styles.Footer}>
              <ExperienceInactive className={styles.FooterIcon} />
              1 upcoming huddle
              <ChevronRightIcon className={styles.FooterIcon} />
            </div>
          </Row>
        ) : null}
      </div>
    </>
  );
};

export default ClubhouseCard;
