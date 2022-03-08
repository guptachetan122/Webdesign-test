import { Row, Col, Button, Badge, Typography } from "antd";
import { BellOutlined, MenuOutlined, MessageOutlined } from "@ant-design/icons";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import { useAppDispatch } from "../../app/hooks";
import { Avatar } from "antd";
import { Menu } from "antd";
import {
  feedNavbar,
  superconnectionNavbar,
  mySuperconnectionNavbar,
  coachingNavbar,
  experiencesNavbar,
  clubhouseNavbar,
} from "../../constants/constants";
import { List, Card } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";

const { Text } = Typography;

const Header = () => {
  const dispatch = useAppDispatch();
  const Router = useRouter();

  return (
    <>
      <Row className={styles.headerDiv} justify="space-between" align="middle">
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
            <div className={styles.imageWrapper}>
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
        <Col className={styles.iconCol} span={8}>
          <Badge count={100} className={styles.iconWrapper}>
            <Avatar
              src={<MessageOutlined />}
              style={{ color: "black", fontSize: "30px" }}
            />
          </Badge>
          <Badge count={10} className={styles.iconWrapper}>
            <Avatar
              src={<BellOutlined />}
              style={{ color: "black", fontSize: "30px" }}
            />
          </Badge>
        </Col>
      </Row>

      {/* {data.map((item) => ( 
				<List key={item.id} className={styles.listWrapper}
				grid={{ column: data.length }}>
					<List.Item key={item.id} className={styles.listItem}>
								<Button type="text">
									<Link href={item.link}>
										<a>{item.name}</a>    
									</Link>    
								</Button>
					</List.Item>
				</List>
			))
			}
				 */}

      {/* /* 
			<List className={styles.listWrapper}
			dataSource={data}
			grid={{ column: data.length }}
				{data.map((item , ind)=> (
						<List.Item key={item.id} className={styles.listItem}>
							<Button type="text">
								<Link href={item.link}>
									<a>{item.name}</a>    
								</Link>    
							</Button>
						</List.Item>
				)}
			/> */}
    </>
  );
};

export default Header;
