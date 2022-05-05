/* eslint-disable @next/next/no-img-element */
import {
  Row,
  Col,
  Badge,
  Typography,
  Avatar,
  Menu,
  Dropdown,
  Card,
} from "antd";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import { useAppDispatch } from "../../app/hooks";
import { useRouter } from "next/router";
import Subheader from "../Subheader";
import {
  clubhouseNavbar,
  coachingNavbar,
  experiencesNavbar,
  feedNavbar,
  messageNavbar,
  myNetworkNavbar,
  superconnectionNavbar,
} from "../../constants";
import ProfileDrawer from "../Drawer";
import { Sticky, StickyProvider } from "react-stickup";

const { Text } = Typography;

const Header = () => {
  const dispatch = useAppDispatch();
  const Router = useRouter();
  const PATH = Router.pathname.split("/")[1];
  const PATH2 = Router.pathname.split("/")[2];

  const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const menu = () => {
    return (
      <Menu className={styles.MenuWrapper}>
        {n.map((i) => (
          <Menu.Item key={i} className={styles.Menu}>
            <Row className={styles.MenuText}>
              you&apos;ve got a new superconnect in sushruta basak! tap to meet
              her
            </Row>
            <Row className={styles.MenuSubText}>7 hours ago</Row>
          </Menu.Item>
        ))}
      </Menu>
    );
  };

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
              <div>+ invite</div>
            </div>
          </Col>

          <Col span={8} className={styles.headerCol}>
            <Link href="/feed" passHref>
              <img
                src="/assets/images/image3.png"
                alt="leap club logo"
                className={styles.headerImageWrapper}
              />
            </Link>
          </Col>
          <Col className={styles.headerIconCol} span={8}>
            <Dropdown overlay={menu} placement="bottomLeft" arrow>
              <Badge count={10} size="default" className={styles.headerBadge}>
                <Avatar
                  src="/assets/images/bell.svg"
                  style={{ color: "black" }}
                  className={styles.headerAvatar}
                />
              </Badge>
            </Dropdown>
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
              <Subheader SubheaderData={[]} />
            ) : PATH == "experiences" ? (
              <Subheader SubheaderData={experiencesNavbar} />
            ) : PATH2 == "[chid]" ? (
              <Subheader SubheaderData={[]} />
            ) : PATH == "clubhouse" ? (
              <Subheader SubheaderData={clubhouseNavbar} />
            ) : PATH2 == "messages" ? (
              <Subheader SubheaderData={messageNavbar} />
            ) : PATH2 == "mynetwork" ? (
              <Subheader SubheaderData={myNetworkNavbar} />
            ) : PATH == "superconnections" ? (
              <Subheader SubheaderData={superconnectionNavbar} />
            ) : PATH2 == "[coachid]" ? (
              <Subheader SubheaderData={[]} />
            ) : PATH == "learn" ? (
              <Subheader SubheaderData={coachingNavbar} />
            ) : PATH == "feed" || PATH == "" ? (
              <Subheader SubheaderData={feedNavbar} />
            ) : null}
          </Sticky>
        </StickyProvider>
      </div>
    </>
  );
};

export default Header;
