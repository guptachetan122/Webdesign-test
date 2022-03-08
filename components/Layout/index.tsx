import React, { ReactChildren, ReactChild } from "react";
import Header from "../Header";
import { Row, Col, BackTop, Layout } from "antd";
import styles from "./Layout.module.css";
import HeadRoom from "react-headroom";
import Sidebar from "../Sidebar";

interface LayoutProps {
  children: ReactChild | ReactChildren;
}

const LayoutPage = ({ children }: LayoutProps) => {
  return (
    <>
      <div className={styles.layoutWrapper}>
        <Header />
      </div>
      <div> {children} </div>
    </>
  );
};

export default LayoutPage;
