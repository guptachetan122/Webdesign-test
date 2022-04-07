import { ArrowLeftOutlined } from "@ant-design/icons";
import {Typography} from "antd";
import { useRouter } from "next/router";
import React from "react";
import styles from "./BackDiv.module.css";

const { Text } = Typography;

const BackDiv = ({ pageName = "" }) => {
  const router = useRouter();
  function goBack() {
    {
      pageName == "mysc" ? router.push("/superconnections") : null;
    }
    {
      pageName == "chats" ? router.push("/superconnections") : null;
    }
    {
      pageName == "" ? router.back() : null;
    }
  }

  return (
    <div className={styles.Header}>
      <Text className={styles.Icon} onClick={goBack}>
        <ArrowLeftOutlined /> back
      </Text>
    </div>
  );
};

export default BackDiv;
