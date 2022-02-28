/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Typography , Col, Row  } from 'antd'
import 'antd/dist/antd.css';
import OldLoginPage from '../components/oldlogin';
import styles from '../styles/OldLogin.module.css'

const { Title } = Typography;

const oldLogin = () => {

   return (
       < >

    <Row  className={styles.mainSectionWrapper}>
        <Col xs={0} sm={0} md={3} lg={3} xl={5} xxl={5}></Col>
        <Col  xs={24} sm ={24} md={18} lg={18} xl={14} xxl={14} className={styles.collogin}>
            <img className={styles.imageWrapper}
							src='../assets/images/image3.png'
							alt='leap club logo'
						></img>
                         {/* <Image src='/image3.png' alt='' layout='fill' /> */}
                         <OldLoginPage />
        </Col>
        <Col xs={0} sm={0} md={3} lg={3} xl={5} xxl={5} >  
                
        </Col>
    </Row>
   
 
    </>
   )
}

export default oldLogin