import { Button, Card } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import { sidebarItems } from "../../constants/constants";
import { Modal } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

interface SidebarProps {
  data: string;
}
const Sidebar = ({ data }: SidebarProps) => {
  const Router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Card bordered={false} className={styles.cardStyle}>
        {sidebarItems.map((val) => (
          <ul key={val.id} className={styles.list}>
            <li
              className={
                Router.pathname.split("/")[1] == val.pathname
                  ? styles.listItem3
                  : styles.listItem
              }
              onClick={() => {
                Router.push(`${val.link}`);
              }}
            >
              <div>
                {Router.pathname.split("/")[1] == val.pathname ? (
                  <Image src={val.img2} alt="feed" width={30} height={26} />
                ) : (
                  <Image src={val.img} alt="feed" width={30} height={26} />
                )}
              </div>
              <div>{val.name}</div>
            </li>
          </ul>
        ))}
        {data == "feed" ? (
          /* This is Card design for feed */
          <Button>Create a Post</Button>
        ) : data == "clubhouse" ? (
          /* This is Card design for Clubhouse */
          <>
            <button className={styles.button2}>Join a Clubhouse</button>
            <button className={styles.button3}> + create Clubhouse</button>
            <button className={styles.button4} onClick={showModal}>
              what’s a clubhouse <QuestionCircleOutlined />
            </button>
            <Modal
              className={styles.modal}
              centered
              visible={isModalVisible}
              onCancel={handleCancel}
              footer={null}
              width={1000}
            >
              <span> what is a clubhouse ?</span>
              <p>
                clubhouses are micro-communities that help you find your tribe
                inside the larger leap.club community. it’s a great place to
                meet others and build strong relationships
              </p>
              <p>join at least 7-8 clubhouses that are relevant to you.</p>
              <p>
                participate in the conversations, answer questions, join the
                huddles, take initiative and organise get-togethers for fellow
                members
              </p>
              <p>
                not keen to be notified of all clubhouse messages? hit the info
                button (i) in the top right corner of the specific clubhouse,
                scroll all the way to the button, and tap “mute clubhouse”
              </p>
              <p>
                new and interesting clubhouses are created as the community
                grows. make sure to check out what’s new every few weeks by
                tapping “join a clubhouse”
              </p>
              <p>
                looking to start a new clubhouse? first browse the list of
                existing clubhouses before you go ahead. it’s better to join an
                existing clubhouse than to start an overlapping one
              </p>
              <p>any questions?</p>
              <p>write to team@leap.club</p>
              <div className={styles.modalButton}>
                <button className={styles.button5} onClick={handleCancel}>
                  back
                </button>
              </div>
            </Modal>
          </>
        ) : data == "clubhouse2" ? (
          <>
            <button className={styles.button3}> + create Clubhouse</button>
            <button className={styles.button4} onClick={showModal}>
              what’s a clubhouse <QuestionCircleOutlined />
            </button>
            <Modal
              className={styles.modal}
              centered
              visible={isModalVisible}
              onCancel={handleCancel}
              footer={null}
              width={1000}
            >
              <div className={styles.modalTitle}> what is a clubhouse ?</div>
              <p>
                clubhouses are micro-communities that help you find your tribe
                inside the larger leap.club community. it’s a great place to
                meet others and build strong relationships
              </p>
              <p>join at least 7-8 clubhouses that are relevant to you.</p>
              <p>
                participate in the conversations, answer questions, join the
                huddles, take initiative and organise get-togethers for fellow
                members
              </p>
              <p>
                not keen to be notified of all clubhouse messages? hit the info
                button (i) in the top right corner of the specific clubhouse,
                scroll all the way to the button, and tap “mute clubhouse”
              </p>
              <p>
                new and interesting clubhouses are created as the community
                grows. make sure to check out what’s new every few weeks by
                tapping “join a clubhouse”
              </p>
              <p>
                looking to start a new clubhouse? first browse the list of
                existing clubhouses before you go ahead. it’s better to join an
                existing clubhouse than to start an overlapping one
              </p>
              <p>any questions?</p>
              <p>
                write to <a>team@leap.club</a>
              </p>
              <div className={styles.modalButton}>
                <button className={styles.button5} onClick={handleCancel}>
                  back
                </button>
              </div>
            </Modal>
          </>
        ) : null}
      </Card>
    </>
  );
};

export default Sidebar;
