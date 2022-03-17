import { Button, List } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "./Subheader2.module.css";
import Image from "next/image";

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
      <div className={styles.SubheaderWrapper}>
        {SubheaderData.map((item) => (
          <Button
            type="text"
            key={item.id}
            className={
              Router.pathname == item.link
                ? styles.SubheaderListItemActive
                : styles.SubheaderListItem
            }
          >
            <Link href={item?.link} passHref>
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
              ) : item.name == "messages" || item.name == "message requests" ? (
                <a>
                  {item.name} ({msg})
                </a>
              ) : item.name ==
                "thisisjusttosetbackonleftsideofthepage" ? null : (
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
