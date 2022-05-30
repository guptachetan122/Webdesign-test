/* eslint-disable @next/next/no-img-element */
import { Card, Carousel, Col, Row, Typography } from "antd";
import { Swiper, SwiperSlide } from 'swiper/react';
import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import styles from "./Prompts.module.css";
import Slider from "react-slick";
import SelectPrompts from "../SelectPromptModal";
import { useAppSelector } from "../../../app/hooks";

const { Text } = Typography;

const Prompts = () => {
  const promptsData = useAppSelector((state) => state.promptSlice);
  let length = 0;
  const calLength = () => {
    promptsData.map((item) => {
      if (item.description != "") {
        length++;
      }
    });
    return length;
  };
  console.log(promptsData);
  return (
    <>
      <div className={calLength() < 3 ? styles.Card : styles.Card2}>
        <Row className={styles.TopRow}>
          <div className={styles.Title}>Know me better</div>
        </Row>
        <div>
          <Row justify="center" align="middle">
            <div className={styles.PromptsWrapper}>
              <Row justify="center">
                <p>
                  members would love to know you better and we have added
                  prompts to enable that. show us your fun side.
                  <br />
                  <br />
                  <span className={styles.minPrompts}>
                    answer minimum of 3 prompts{" "}
                  </span>
                  to show all prompts on your profile
                </p>
              </Row>
              <Row justify="center" align="middle">
                {/* <button className={styles.button}>+ answer prompts</button> */}
                <SelectPrompts />
              </Row>
            </div>
          </Row>
        </div>
      </div>

      <div className={calLength() < 3 ? styles.Card2 : styles.Card}>
        <Row>
          <Col span={22} className={styles.MainColumn}>
            <div>
              <Row className={styles.Row}>
                <Text className={styles.Title}>Know me better</Text>
              </Row>
            </div>
          </Col>
          <Col span={2}>
            {/* <div className={styles.TriggerButton} onClick={showModal}>
            <Edit3 className={styles.EditIcon} />
          </div> */}
            <SelectPrompts editMode />
          </Col>
        </Row>
        <Row justify="center">
          <Splide
            aria-label="My Favorite Images"
            options={{
              rewind: true,
              // width: 800,
              // gap: "1rem",
              type: "slide",
            }}
          >
            {promptsData?.map((item) => {
              return item.description != "" ? (
                <SplideSlide key={item.title} className={styles.Splide}>
                  <div className={styles.PromptsWrapper}>
                    <Row className={styles.Row}>
                      <div className={styles.Title}>{item.title}</div>
                    </Row>
                    <Row className={styles.Row}>
                      <div className={styles.Description}>
                        {item.description}
                      </div>
                    </Row>
                  </div>
                </SplideSlide>
              ) : null;
            })}
          </Splide>
        </Row>
      </div>
    </>
  );
};

export default Prompts;
