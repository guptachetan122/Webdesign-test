import React, { useState } from "react";
import { CaretDownFilled } from "@ant-design/icons";
import { Avatar, Col, Drawer, Row, Typography } from "antd";
import styles from "./Drawer.module.css";
import { LogoutIcon } from "@heroicons/react/outline";
const { Text } = Typography;

const ProfileDrawer = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Row>
        <Col span={6}>
          <div className={styles.DrawerButton} onClick={showDrawer}>
            <CaretDownFilled /> me
          </div>
        </Col>
        <Col span={8}></Col>
        <Col span={8}></Col>
      </Row>

      <Drawer
        title=""
        width={350}
        closable={false}
        onClose={onClose}
        visible={visible}
        placement="left"
      >
        {" "}
        <Row>
          <Col span={8}>
            {" "}
            <Avatar
              className={styles.DrawerAvatar}
              src={"/assets/images/Ragini.png"}
            />
          </Col>
          <Col span={16} className={styles.DrawerCol}>
            <div>
              <Row>
                <Text className={styles.DrawerName}>ragini das</Text>
              </Row>{" "}
              <Row>
                <Text className={styles.DrawerLink}>view my profile</Text>
              </Row>
            </div>
          </Col>
        </Row>
        <Row className={styles.DrawerMiddle}>
          <div>
            <Row className={styles.DrawerMiddleRow}>
              <Text className={styles.DrawerText}>how to use leap.club</Text>
            </Row>
            <Row className={styles.DrawerMiddleRow}>
              <Text className={styles.DrawerText}>share feedback</Text>
            </Row>
            <Row className={styles.DrawerMiddleRow}>
              {" "}
              <Text className={styles.DrawerText}>member stories</Text>
            </Row>
            <Row className={styles.DrawerMiddleRow}>
              <Text className={styles.DrawerText}>change password</Text>
            </Row>
          </div>
        </Row>
        <Row className={styles.DrawerIcon}>
          <div>
            <Row className={styles.DrawerIconRow}>
              <Col>
                <LogoutIcon className={styles.DrawerIconStyle} />
              </Col>
              <Col>
                <Text className={styles.DrawerText}>logout</Text>
              </Col>
            </Row>
          </div>
        </Row>
      </Drawer>
    </>
  );
};

export default ProfileDrawer;
