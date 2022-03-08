import type { NextPage } from 'next'
import { Row, Col } from 'antd';
import styles from '../styles/Home.module.css'
import { Menu } from 'antd';

const Home: NextPage = () => {
  return (
    <>
    <div className={styles.body}>
          <Menu className={styles.breadbody} mode="horizontal">
          <Menu.Item> private </Menu.Item>
          <Menu.Item> public </Menu.Item>
          <Menu.Item> mentions </Menu.Item>
          <Menu.Item> activity </Menu.Item>
          </Menu>

    </div>
   
    </>
    
  )
}

export default Home
