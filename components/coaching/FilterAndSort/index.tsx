import React, { useState } from "react";
import { ChTags, Filters, Sorts } from "../../../constants";
import styles from "./FilterAndSort.module.css";
import { Card, Col, Collapse, Row, Typography } from "antd";
import ButtonLight from "../../common/Button/ButtonLight";

const { Text } = Typography;
const { Panel } = Collapse;

const FilterAndSort = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedSort, setSelectedSort] = useState("alphabetical");

  const [open, setOpen] = useState(false);
  const handleOpen = (e: any) => {
    e.preventDefault();
    setOpen(false);
    setSelectedFilter("all");
    setSelectedSort("alphabetical");
  };

  const handleApply = (e: any) => {
    e.preventDefault();
    setOpen(false);
  };

  const handleCollapse = (e: any) => {
    setOpen(!open);
  };

  function Filter(tag: string) {
    if (selectedFilter == tag) {
      return null;
    } else {
      setSelectedFilter(tag);
    }
  }

  function Sort(tag: string) {
    if (selectedSort == tag) {
      return null;
    } else {
      setSelectedSort(tag);
    }
  }

  return (
    <Collapse
      activeKey={open ? "1" : ""}
      onChange={handleCollapse}
      className={styles.Collapse}
      ghost
      destroyInactivePanel
    >
      <Panel
        header={<ButtonLight name="filter and sort" />}
        key="1"
        showArrow={false}
      >
        <div className={styles.Card}>
          <Row>
            <Col span={12}>
              <Row className={styles.Row}>
                <div className={styles.Title}>filter by location</div>
              </Row>
              {Filters?.map((tag) => {
                return (
                  <Row
                    className={
                      selectedFilter == tag ? styles.TagActive : styles.Tag
                    }
                    key={tag}
                    onClick={() => Filter(tag)}
                  >
                    {tag}
                  </Row>
                );
              })}
            </Col>
            <Col span={12}>
              <Row className={styles.Row}>
                <div className={styles.Title}>sort</div>
              </Row>
              {Sorts?.map((tag) => {
                return (
                  <Row
                    className={
                      selectedSort == tag ? styles.TagActive : styles.Tag
                    }
                    key={tag}
                    onClick={() => Sort(tag)}
                  >
                    {tag}
                  </Row>
                );
              })}
            </Col>
          </Row>
          <br />
          <Row>
            <div className={styles.Button} onClick={handleOpen}>
              clear
            </div>
            <div className={styles.Button2} onClick={handleApply}>
              apply
            </div>
          </Row>
        </div>
      </Panel>
    </Collapse>
  );
};

export default FilterAndSort;
