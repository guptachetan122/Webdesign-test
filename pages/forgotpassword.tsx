/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Typography , Col, Row  } from 'antd'
import 'antd/dist/antd.css';
import ForgotPass from '../components/forgotpassword';
import styles from '../styles/ForgotPassword.module.css'

const { Title } = Typography;

const ForgotPassword = () => {

   return (
       < >

    <Row  className={styles.mainSectionWrapper}>
        <Col  xs={24} sm ={24} md={24} lg={12} className={styles.colimg}>
            <img className={styles.imageWrapper}
							src='../assets/images/image3.png'
							alt='leap club logo'
						></img>
                         {/* <Image src='/image3.png' alt='' layout='fill' /> */}
            <Title level={3} className={styles.contentWrapper} >yeh kadam nahi chalang hai</Title>
            <Title level={3} className={styles.contentWrapper1}>  ये कदम नहीं, छलांग है </Title>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} className={styles.collogin} >  
                <ForgotPass /> 
        </Col>
    </Row>
   
 
    </>
   )
}

export default ForgotPassword