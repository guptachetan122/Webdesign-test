import { Button} from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "./Subheader.module.css";

interface SubheaderProps {
  SubheaderData: {
    id: number;
    name: string;
    link: string;
  }[];
}

const Subheader = ({ SubheaderData }: SubheaderProps) => {
  const Router = useRouter();
  const msg = 5;
  return (
    <>
      {SubheaderData && SubheaderData.length > 0? (
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
                    { item.name == "messages" ||
                      item.name == "message requests" ? (
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
      ) : null}
    </>
  );
};

export default Subheader;
