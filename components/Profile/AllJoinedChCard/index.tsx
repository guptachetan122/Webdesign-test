import React, { useState } from "react";
import { Col, Row, Typography } from "antd";
import styles from "./AllJoinedChCard.module.css";
import { ProfileDetail } from "../../../constants";

const { Text } = Typography;

const AllJoinedChCard = () => {
  const [seeAll, setSeeAll] = useState(false);

  const handleViewAll = () => {
    setSeeAll(!seeAll);
  };

  function scrollToChRow() {
    setSeeAll(!seeAll);
    const Element = document.getElementById("ch");
    Element?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={styles.Card}>
      <Row>
        <Col span={22} className={styles.MainColumn}>
          <div className={styles.Wrapper}>
            <Row className={styles.DetailRow} id="ch">
              <Text className={styles.Name}>clubhouses i&apos;m a part of</Text>
            </Row>
            <Row className={styles.DetailRow}>
              {!seeAll ? (
                <>
                  {ProfileDetail?.chList?.slice(0, 3).map((item) => {
                    return (
                      <Row className={styles.ChRow} key={item}>
                        <Text className={styles.SubDescription}>{item}</Text>
                      </Row>
                    );
                  })}
                  <div className={styles.SeeAll} onClick={handleViewAll}>
                    see all
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  {ProfileDetail?.chList?.map((item) => {
                    return (
                      <Row className={styles.ChRow} key={item}>
                        <Text className={styles.SubDescription}>{item}</Text>
                      </Row>
                    );
                  })}
                  <div className={styles.SeeAll} onClick={scrollToChRow}>
                    see less
                  </div>
                </>
              )}
            </Row>
          </div>
        </Col>
        <Col span={2}>{/* <Edit3 /> */}</Col>
      </Row>
    </div>
  );
};

export default AllJoinedChCard;
