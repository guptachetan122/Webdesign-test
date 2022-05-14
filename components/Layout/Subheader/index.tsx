import { Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "./Subheader.module.css";

interface SubheaderProps {
  SubheaderData: {
    id: number;
    name: string;
    link: string;
  }[];
}

const Subheader = ({ SubheaderData }: SubheaderProps) => {
  const [colorChange, setColorchange] = useState(false);

  useEffect(function mount() {
    function onScroll() {
      if (window.scrollY >= 80) {
        setColorchange(true);
      } else {
        setColorchange(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return function unMount() {
      window.removeEventListener("scroll", onScroll);
    };
  });

  
  const Router = useRouter();
  const msg = 5;
  return (
    <>
      {SubheaderData && SubheaderData.length > 0 ? (
        <div className={colorChange ? styles.Container : styles.InitialContainer}>
          {SubheaderData.map((item) => (
            <div
              // type="text"
              key={item.id}
              className={
                Router.pathname == item.link
                  ? colorChange
                    ? styles.ItemActive
                    : styles.InitialItemActive
                  : colorChange
                  ? styles.Item
                  : styles.InitialItem
              }
            >
              <Link href={item?.link} passHref>
                {item.name == "messages" || item.name == "message requests" ? (
                  <div>
                    {item.name} ({msg})
                  </div>
                ) : (
                  <div>{item.name}</div>
                )}
              </Link>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default Subheader;
