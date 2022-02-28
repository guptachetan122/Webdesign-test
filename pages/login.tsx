/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Typography , Col, Row  } from 'antd'
import 'antd/dist/antd.css';
import OldLoginPage from '../components/oldlogin';
import styles from '../styles/OldLogin.module.css'

const { Title } = Typography;

const oldLogin = () => {

   return (
    <div className={styles.divBackground}>

    <Row  className={styles.mainSectionWrapper}>
        <Col xs={1} sm={1} md={5} lg={5} xl={6} xxl={6} ></Col>
        <Col  xs={22} sm ={22} md={14} lg={14} xl={12} xxl={12} >
            <img className={styles.imageWrapper}
							src='../assets/images/image3.png'
							alt='leap club logo'
						></img>
                         {/* <Image src='/image3.png' alt='' layout='fill' /> */}
                         <OldLoginPage />
        </Col>
        <Col xs={1} sm={1} md={5} lg={5} xl={6} xxl={6} > </Col>
    </Row>
   
    </div>
   )
}

export default oldLogin