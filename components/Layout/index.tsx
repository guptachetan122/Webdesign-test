import React, { ReactChildren, ReactChild } from "react";
import Header from "../Header";
import { Row, Col, BackTop, Layout } from "antd";
import styles from "./Layout.module.css";
import HeadRoom from "react-headroom";
import Sidebar from "../Sidebar";
import Subheader2 from "../Subheader2";
import { useRouter } from "next/router";
import { experiencesNavbar } from "../../constants/constants";

interface LayoutProps {
  children: ReactChild | ReactChildren;
}

const LayoutPage = ({ children }: LayoutProps) => {

  const Router = useRouter();

  return (
    <>
        <HeadRoom>
          {" "}
          <Header />
        </HeadRoom>
        <div> {children} </div>
    </>
  );
};

export default LayoutPage;
