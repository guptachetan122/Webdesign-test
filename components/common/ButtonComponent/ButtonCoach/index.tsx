import { CheckCircleOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React, { useState } from "react";
import styles from "./ButtonCoach.module.css";

interface PackageProps {
  PackageData: {
    cost: number;
    popular: boolean;
    preTaxCost: number;
    sessionCount: number;
    _id: string;
  }[];
}

interface SubheaderProps {
  SubheaderData: {
    id: number;
    name: string;
    link: string;
  }[];
}

const ButtonCoach = ({ PackageData }: PackageProps) => {
  const id = PackageData.filter((a) => a.popular == true)[0]?._id;
  console.log(id);
  const [isActive, setActive] = useState(false);
  const [val, setVal] = useState(id);

  function clicked(idReceived: string) {
    console.log(id);
    if (val == idReceived) {
      return;
    } else {
      setVal(idReceived);
    }
  }

  return (
    <>
      {PackageData?.map((item) => {
        return (
          <div
            className={val == item?._id ? styles.ButtonActive : styles.Button}
            key={item._id}
            onClick={() => clicked(item?._id)}
          >
            <Row>
              <Col span={3}>
                {val == item?._id ? (
                  <CheckCircleOutlined className={styles.ButtonIcon} />
                ) : null}
              </Col>
              <Col span={6}>{item?.sessionCount} session</Col>
              <Col span={8}>
                {item.popular ? (
                  <button className={styles.SubButtonActive}>
                    most popular
                  </button>
                ) : null}
              </Col>
              <Col span={6}>₹{item?.cost}</Col>
              <Col span={1}></Col>
            </Row>
          </div>
        );
      })}
    </>
  );
};

export default ButtonCoach;
