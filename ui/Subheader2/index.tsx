/* eslint-disable @next/next/no-img-element */
import { Button, List } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "./Subheader2.module.css";

interface SubheaderProps {
  SubheaderData: {
    id: number;
    name: string;
    link: string;
  }[];
}

const Subheader2 = ({ SubheaderData }: SubheaderProps) => {
  const Router = useRouter();
  const msg = 5;
  return (
    <>
      {" "}
      <div className={styles.Container}>
        {SubheaderData.map((item) => (
          <Button
            type="text"
            key={item.id}
            className={
              Router.pathname == item.link
                ? styles.ListItemActive
                : styles.ListItem
            }
          >
            <Link href={item?.link} passHref>
              {item.name == "back" ? (
                <a>
                  <img
                    src="/assets/images/back-arrow-2.png"
                    alt="back-arrow"
                    className={styles.Img}
                  />{" "}
                  {item.name}
                </a>
              ) : item.name == "messages" || item.name == "message requests" ? (
                <a>
                  {item.name} ({msg})
                </a>
              ) : (
                <a>{item.name}</a>
              )}
            </Link>
          </Button>
        ))}
      </div>
    </>
  );
};

export default Subheader2;
