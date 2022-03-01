/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Typography , Col, Row  } from 'antd'
import 'antd/dist/antd.css';
import OldLoginPage from '../components/oldlogin';
import styles from '../styles/OldLogin.module.css'

const { Title } = Typography;

const oldLogin = () => {

    console.log("logg");
   return (
    <div>

    <Row  className={styles.mainSectionWrapper}>
        <Col xs={0} sm={0} md={5} lg={5} xl={6} xxl={6} ></Col>
        <Col  xs={24} sm ={24} md={14} lg={14} xl={12} xxl={12} >
            <img className={styles.imageWrapper}
							src='../assets/images/image3.png'
							alt='leap club logo'
						></img>
                         {/* <Image src='/image3.png' alt='' layout='fill' /> */}
                         <OldLoginPage />
        </Col>
        <Col xs={0} sm={0} md={5} lg={5} xl={6} xxl={6} > </Col>
    </Row>
   
    </div>
   )
}

export default oldLogin