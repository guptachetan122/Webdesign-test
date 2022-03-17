import { Button, List } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "./Subheader.module.css";
import Image from "next/image";

interface SubheaderProps {
  SubheaderData: {
    id: number;
    name: string;
    link: string;
  }[];
}

const Subheader = ({ SubheaderData}: SubheaderProps) => {
  const Router = useRouter();
  const msg = 5;
  return (
    <>
      <List
        className={
          SubheaderData.length > 3
            ? styles.SubheaderWrapper2
            : styles.SubheaderWrapper
        }
        dataSource={SubheaderData}
        grid={SubheaderData.length < 3 ? { gutter:8 , column: 3 } : {gutter:8 , column: SubheaderData.length }}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <Button
              type="text"
              className={
                Router.pathname == item.link
                  ? styles.SubheaderListItemActive
                  : styles.SubheaderListItem
              }
            >
              <Link href={item.link}>
                {item.name == "back" ? (
                  <a>
                    <Image
                      src="/assets/images/back-arrow-2.png"
                      alt="back-arrow"
                      width={12}
                      height={12}
                    />{" "}
                    {item.name}
                  </a>
                ) : item.name == "messages" ||
                  item.name == "message requests" ? (
                  <a>
                    {item.name} ({msg})
                  </a>
                ) : (
                  <a>{item.name}</a>
                )}
              </Link>
            </Button>
          </List.Item>
        )}
      />
    </>
  );
};

export default Subheader;


