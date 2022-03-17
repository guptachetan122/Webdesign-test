import { Row, Col, Badge, Typography , Avatar } from "antd";
import { BellOutlined, MessageOutlined } from "@ant-design/icons";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import { useAppDispatch } from "../../app/hooks";
import { useRouter } from "next/router";

const { Text } = Typography;

const Header = () => {
  const dispatch = useAppDispatch();
  const Router = useRouter();

  return (
    <>
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
            style={{ width: 56.38, height: 56.38 }}
          />
          <div style={{ width: 80, height: 15, color: "black", fontSize: 12 }}>
            my profile
          </div>
        </Col>

        <Col span={8}>
          <Link href="/" passHref>
            <div className={styles.headerImageWrapper}>
              <Image
                src="/assets/images/image3.png"
                alt="leap club logo"
                width="100%"
                height="100%"
                objectFit="contain"
              />
            </div>
          </Link>
        </Col>
        <Col className={styles.headerIconCol} span={8}>
          <Badge count={10} className={styles.headerIconWrapper}>
            <Avatar
              src="/assets/images/bell.svg"
              style={{ color: "black", fontSize: "30px" }}
            />
          </Badge>
          <Badge count={100} className={styles.headerIconWrapper}>
            <Avatar
              src="/assets/images/message-circle.svg"
              style={{ color: "black", fontSize: "30px" }}
            />
          </Badge>
        </Col>
      </Row>
    </>
  );
};

export default Header;
