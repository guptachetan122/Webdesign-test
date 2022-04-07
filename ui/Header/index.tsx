/* eslint-disable @next/next/no-img-element */
import { Row, Col, Badge, Typography, Avatar } from "antd";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import { useAppDispatch } from "../../app/hooks";
import { useRouter } from "next/router";
import Subheader2 from "../Subheader2";
import {
  clubhouseNavbar,
  coachingNavbar,
  experiencesNavbar,
  feedNavbar,
  messageNavbar,
  myNetworkNavbar,
  superconnectionNavbar,
} from "../../constants/constants";
import HeadRoom from "react-headroom";
import ProfileDrawer from "../Drawer";
import { Sticky, StickyProvider } from "react-stickup";

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
        {" "}
        <Row className={styles.headerDiv}>
          <Col span={8}>
            {" "}
            <div className={styles.AvatarCol}>
              {" "}
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
              />{" "}
              <ProfileDrawer />
            </div>
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
            <Badge count={10} size="default" className={styles.headerBadge}>
              <Avatar
                src="/assets/images/bell.svg"
                style={{ color: "black" }}
                className={styles.headerAvatar}
              />
            </Badge>
            <Badge count={100} size="default" className={styles.headerBadge}>
              <Avatar
                src="/assets/images/message-circle.svg"
                style={{ color: "black" }}
                className={styles.headerAvatar}
              />
            </Badge>
          </Col>
        </Row>
        <StickyProvider>
          <Sticky className={styles.subHeaderWrapper}>
            {PATH2 == "[expid]" ? (
              <Subheader2 SubheaderData={[]} />
            ) : PATH == "experiences" ? (
              <Subheader2 SubheaderData={experiencesNavbar} />
            ) : PATH2 == "[chid]" ? (
              <Subheader2 SubheaderData={[]} />
            ) : PATH == "clubhouse" ? (
              <Subheader2 SubheaderData={clubhouseNavbar} />
            ) : PATH2 == "messages" ? (
              <Subheader2 SubheaderData={messageNavbar} />
            ) : PATH2 == "mynetwork" ? (
              <Subheader2 SubheaderData={myNetworkNavbar} />
            ) : PATH == "superconnections" ? (
              <Subheader2 SubheaderData={superconnectionNavbar} />
            ) : PATH2 == "[coachid]" ? (
              <Subheader2 SubheaderData={[]} />
            ) : PATH == "learn" ? (
              <Subheader2 SubheaderData={coachingNavbar} />
            ) : PATH == "feed" || PATH == "" ? (
              <Subheader2 SubheaderData={feedNavbar} />
            ) : null}
          </Sticky>
        </StickyProvider>
      </div>
    </>
  );
};

export default Header;
