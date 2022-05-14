/* eslint-disable @next/next/no-img-element */
import {
  HeartIcon as HeartLight,
  BookmarkIcon as BookmarkLight,
  ChatAltIcon,
} from "@heroicons/react/outline";
import {
  DotsHorizontalIcon,
  BookmarkIcon as BookmarkDark,
  HeartIcon as HeartDark,
} from "@heroicons/react/solid";
import { Avatar, Col, Divider, Dropdown, Menu, Row } from "antd";
import React, { useState } from "react";
import ButtonLight from "../../common/Button/ButtonLight";
import ScModal from "../../sc/ScModal";
import SeeMore from "../../common/SeeMore";
import FeedComment from "../FeedComment";
import styles from "./FeedCard.module.css";
import { Input } from "antd";
import LikesModal from "../LikesModal";

const { TextArea } = Input;

const FeedCard = ({ isConnect = false, isLoggedIn = false }) => {
  const [makeComment, setMakeComment] = useState(false);
  const [viewComments, setViewComments] = useState(false);
  const [viewAllComments, setViewAllComments] = useState(false);
  const [changeBookmark, setBookmark] = useState(false);
  const [changeLike, setLike] = useState(false);

  const handleComment = () => setMakeComment(!makeComment);

  const handleComments = () => setViewComments(!viewComments);

  const handleBookmark = () => setBookmark(!changeBookmark);

  const handleLike = () => setLike(!changeLike);

  const handleAllComments = () => setViewAllComments(!viewAllComments);

  const menu = () => {
    return isLoggedIn ? (
      <Menu className={styles.Menu}>
        <Menu.Item key="1" className={styles.MenuItem}>
          <div>
            <img
              src="/assets/images/pin-black.png"
              alt="unpin image"
              className={styles.MenuIcon}
            />{" "}
            delete post
          </div>
        </Menu.Item>
        <Menu.Item key="2" className={styles.MenuItem}>
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
        <Menu.Item key="1" className={styles.MenuItem}>
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
          <Col span={18} className={styles.DetailColumn}>
            <div>
              <Avatar
                className={styles.Avatar}
                src={"/assets/images/Ragini.png"}
              />
            </div>
            <div className={styles.DetailWrapper}>
              <div>
                <div className={styles.Name}>janvi biyani</div>
                <div className={styles.Description}>
                  co-founder at beyond milk | graphic designer
                </div>
                <div className={styles.Description}>1 hr ago • 2k+ views</div>
              </div>
            </div>
          </Col>
          
          <Col span={6} className={styles.ButtonColumn}>
            {isConnect ? <ButtonLight name="chat" /> : <ScModal />}
          </Col>
        </Row>
        <Row className={styles.Row}>
          <div>
            {" "}
            <SeeMore>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </SeeMore>
          </div>
        </Row>
        <Row className={styles.Row}>
          {" "}
          <img
            src="/assets/images/Feed-bkg.png"
            alt="feed bkg"
            className={styles.Image}
          />
        </Row>
        <Row className={styles.Row}>
          <Col span={12}>
            <div className={styles.Likes}><LikesModal num={100}/></div>
          </Col>
          <Col span={12}>
            <div className={styles.Comments} onClick={handleComments}>
              200 comments
            </div>
          </Col>
        </Row>
        <Row className={styles.CtaRow}>
          <Col span={8} className={styles.CtaColumn} onClick={handleLike}>
            {changeLike ? (
              <HeartDark className={styles.CtaIconDark} />
            ) : (
              <HeartLight className={styles.CtaIcon} />
            )}
            like
          </Col>

          <Col span={8} className={styles.CtaColumn} onClick={handleComment}>
            <ChatAltIcon className={styles.CtaIcon} />
            comment
          </Col>

          <Col span={4} className={styles.CtaColumn} onClick={handleBookmark}>
            {changeBookmark ? (
              <BookmarkDark className={styles.CtaIcon} />
            ) : (
              <BookmarkLight className={styles.CtaIcon} />
            )}
          </Col>

          <Col span={4} className={styles.DropdownColumn}>
            <Dropdown
              overlay={menu}
              // trigger={["click"]}
            >
              <DotsHorizontalIcon
                className={styles.DropdownIcon}
                // onClick={(e) => e.stopPropagation()}
              />
            </Dropdown>
          </Col>
        </Row>

        {makeComment || viewComments ? (
          <Row className={styles.TextAreaRow}>
            <Col span={24} className={styles.TextAreaColumn}>
              <div>
                <Avatar
                  className={styles.CommentAvatar}
                  src={"/assets/images/Ragini.png"}
                />
              </div>
              <TextArea
                placeholder=" add a comment.."
                autoSize
                className={styles.TextArea}
              />
            </Col>
          </Row>
        ) : null}

        {viewComments ? (
          <>
            <Divider
              style={{
                margin: "0%",
                borderWidth: "1px",
                borderColor: "#c2c2c2",
              }}
            />
            <Row className={styles.Row}>
              <FeedComment />
              {viewAllComments ? (
                <>
                  <FeedComment />
                  <FeedComment isConnect />
                  {/* <div
                    style={{
                      width: "100%",
                      textAlign: "center",
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                    onClick={handleAllComments}
                  >
                    view less comments
                  </div> */}
                </>
              ) : (
                <div
                  style={{
                    width: "100%",
                    textAlign: "center",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                  onClick={handleAllComments}
                >
                  view all comments
                </div>
              )}
            </Row>
          </>
        ) : null}

      </div>
    </>
  );
};

export default FeedCard;
