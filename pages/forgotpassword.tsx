/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Typography , Col, Row  } from 'antd'
import styles from '../styles/ForgotPasswordPage.module.css'
import ForgotPass from '../components/ForgotPassword';

const { Title } = Typography;

const ForgotPasswordPage = () => {

    console.log("logg");
   return (
    <div>

    <Row  className={styles.mainSectionWrapper}>
        <Col xs={0} sm={0} md={4} lg={6} xl={6} xxl={6} ></Col>
        <Col  xs={24} sm ={24} md={16} lg={12} xl={12} xxl={12} >
            <img className={styles.imageWrapper}
							src='../assets/images/image3.png'
							alt='leap club logo'
						></img>
                         {/* <Image src='/image3.png' alt='' layout='fill' /> */}
                        <ForgotPass/>
        </Col>
        <Col xs={0} sm={0} md={4} lg={6} xl={6} xxl={6} > </Col>
    </Row>
   
    </div>
   )
}

export default ForgotPasswordPage