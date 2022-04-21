/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Avatar, Col, Divider, Dropdown, Menu, Row } from "antd";
import ButtonLight from "../../common/Button/ButtonLight";
import ScModal from "../../common/Modal/ScModal";
import styles from "./FeedReply.module.css";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import SeeMore from "../../common/SeeMore";

const FeedReply = ({ isConnect = false, isLoggedIn = false }) => {
  const menu = () => {
    return isLoggedIn ? (
      <Menu className={styles.MenuWrap}>
        <Menu.Item key="1" className={styles.Menu}>
          <div>
            <img
              src="/assets/images/pin-black.png"
              alt="unpin image"
              className={styles.MenuIcon}
            />{" "}
            delete post
          </div>
        </Menu.Item>
        <Menu.Item key="2" className={styles.Menu}>
          <div>
            <img
              src="/assets/images/mute-black.png"
              alt="mute image"
              className={styles.MenuIcon}
            />{" "}
            report post
          </div>
        </Menu.Item>
      </Menu>
    ) : (
      <Menu className={styles.MenuWrap}>
        <Menu.Item key="1" className={styles.Menu}>
          <div>
            <img
              src="/assets/images/pin-black.png"
              alt="unpin image"
              className={styles.MenuIcon}
            />{" "}
            report post
          </div>
        </Menu.Item>
      </Menu>
    );
  };

  return (
    <>
      <div className={styles.Container}>
        <Row className={styles.Row}>
          <Col span={2}>
            <div>
              <Avatar
                className={styles.Avatar}
                src={"/assets/images/Ragini.png"}
              />
            </div>
          </Col>
          <Col span={16} className={styles.MiddleColumn}>
            <div>
              <div>
                <div className={styles.Name}>janvi biyani</div>

                <div className={styles.Description}>
                  co-founder at beyond milk | graphic designer
                </div>

                <div className={styles.Description}>1 hr ago</div>
              </div>
              <div className={styles.TextWrapper}>
                <SeeMore>
                  8-10, started following some new practices recently
                  @guramrita_oberoi this is what I was referring to! @pranaya_kc
                  Tagging her as she is in the field for sometime now! Tagging
                  her as she is in the field for sometime now!
                </SeeMore>
              </div>
            </div>
          </Col>
          <Col span={6} className={styles.ThirdCol}>
            <div className={styles.ButtonWrapper}>
              <div>
                {isConnect ? (
                  <ButtonLight name="chat" onlyIcon />
                ) : (
                  <ScModal onlyIcon />
                )}
              </div>
              <div className={styles.DropdownWrapper}>
                <Dropdown
                  overlay={menu}
                  // trigger={["click"]}
                >
                  <DotsHorizontalIcon
                    className={styles.DropdownIcon}
                    // onClick={(e) => e.stopPropagation()}
                  />
                </Dropdown>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default FeedReply;
