import { Button, List } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "./Subheader.module.css";
import HeadRoom from "react-headroom";

interface SubheaderProps {
  data: {
    id: number;
    name: string;
    link: string;
  }[];
}

const Sidebar = ({ data }: SubheaderProps) => {
  const Router = useRouter();

  return (
    <>
      <List
        className={data.length > 3 ? styles.listWrapper2 : styles.listWrapper}
        dataSource={data}
        grid={{ column: data.length }}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <Button
              type="text"
              className={
                Router.pathname == item.link
                  ? styles.listItem3
                  : styles.listItem
              }
            >
              <Link href={item.link}>
                <a>{item.name}</a>
              </Link>
            </Button>
          </List.Item>
        )}
      />
    </>
  );
};

export default Sidebar;
