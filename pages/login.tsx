/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Typography , Col, Row  } from 'antd'
import Login from '../components/auth/LoginForm';
import styles from '../styles/LoginPage.module.css'
import Link from 'next/link';

const { Title } = Typography;

const LoginPage = () => {

    console.log("logg");
   return (
    

    <Row  className={styles.mainSectionWrapper}>
        <Col span={7} ></Col>
        <Col  span={10} className={styles.collog}>
            <img className={styles.imageWrapper}
							src='../assets/images/image3.png'
							alt='leap club logo'
						></img>
                         {/* <Image src='/image3.png' alt='' layout='fill' /> */}
                         <Login />
        </Col>
        <Col span={7}></Col>
    </Row>
   
   )
}

export default LoginPage