/* eslint-disable @next/next/no-img-element */
import { Row, Col, Badge, Typography, Avatar } from "antd";
import { BellOutlined, MessageOutlined } from "@ant-design/icons";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import { useAppDispatch } from "../../app/hooks";
import { useRouter } from "next/router";
import Subheader2 from "../Subheader2";
import {
  backNavbar,
  clubhouseNavbar,
  coachingNavbar,
  expbackNavbar,
  experiencesNavbar,
  feedNavbar,
  messageNavbar,
  myNetworkNavbar,
  superconnectionNavbar,
} from "../../constants/constants";

const { Text } = Typography;

const Header = () => {
  const dispatch = useAppDispatch();
  const Router = useRouter();
  const PATH = Router.pathname.split("/")[1];
  const PATH2 = Router.pathname.split("/")[2];
  console.log(PATH2);

  return (
    <>
      <div className={styles.headerWrapper}>
        <Row className={styles.headerDiv}>
          <Col span={8}>
            <Avatar
              src={
                <Image
                  src="/assets/images/Ragini.png"
                  alt="profile picture"
                  width="100%"
                  height="100%"
                  objectFit="contain"
                />
              }
              className={styles.profileAvatar}
            />
            <div style={{fontSize: 20, width : 'fit-content'}}>my profile</div>
          </Col>

          <Col span={8} className={styles.headerCol}>
            <Link href="/" passHref>
              <img
                src="/assets/images/image3.png"
                alt="leap club logo"
                className={styles.headerImageWrapper}
              />
            </Link>
          </Col>
          <Col className={styles.headerIconCol} span={8}>
            <Badge
              count={10}
              size="default"
              className={styles.headerIconWrapper}
            >
              <Avatar
                src="/assets/images/bell.svg"
                style={{ color: "black" }}
                className={styles.headerAvatar}
              />
            </Badge>
            <Badge
              count={100}
              size="default"
              className={styles.headerIconWrapper}
            >
              <Avatar
                src="/assets/images/message-circle.svg"
                style={{ color: "black" }}
                className={styles.headerAvatar}
              />
            </Badge>
          </Col>
        </Row>
        <Row>
          {PATH2 == "[expid]" ? (
            <div className={styles.subHeader}>
              <Subheader2 SubheaderData={expbackNavbar} />
            </div>
          ) : PATH == "experiences" ? (
            <div className={styles.subHeader}>
              <Subheader2 SubheaderData={experiencesNavbar} />
            </div>
          ) : PATH2 == "[chid]" ? (
            <div className={styles.subHeader}>
              <Subheader2 SubheaderData={backNavbar} />
            </div>
          ) : PATH == "clubhouse" ? (
            <div className={styles.subHeader}>
              <Subheader2 SubheaderData={clubhouseNavbar} />
            </div>
          ) : PATH2 == "messages" ? (
            <div className={styles.subHeader}>
              <Subheader2 SubheaderData={messageNavbar} />
            </div>
          ) : PATH2 == "mynetwork" ? (
            <div className={styles.subHeader}>
              <Subheader2 SubheaderData={myNetworkNavbar} />
            </div>
          ) : PATH == "superconnections" ? (
            <Subheader2 SubheaderData={superconnectionNavbar} />
          ) : PATH == "learn" ? (
            <Subheader2 SubheaderData={coachingNavbar} />
          ) : PATH == "feed" ? (
            <div className={styles.subHeader}>
              <Subheader2 SubheaderData={feedNavbar} />
            </div>
          ) : null}
        </Row>
      </div>
    </>
  );
};

export default Header;
