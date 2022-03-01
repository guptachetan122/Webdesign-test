import React, { useState } from 'react'
import { Button, Form, Input } from 'antd'
import { Typography } from 'antd'
import 'antd/dist/antd.css';
import styles from './Login.module.css';
import Link from 'next/link'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import useForm , {useAppDispatch} from '../../app/hooks'


const { Text } = Typography

const ChangePass = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false)
    const dispatch = useAppDispatch();
  
	
	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo)
	}

    const onFinish =  (values : any) => {
        const user = {
			email: values.email.toLowerCase().trim(),
			password: values.password.trim(),
		}
     
            
            console.log(user);
            
	}

  return (
        <div className={styles.waitlistContainer}>
                            <Form
                                className='form'
                                name='basic'
                                layout='vertical'
                                
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                form={form}
                            >
                                <Form.Item
                                    className={styles.inputLabel}
                                    label="password"
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input.Password className={styles.input} placeholder='enter your password' />
                                </Form.Item>
                                <Form.Item
                                    className={styles.inputLabel}
                                    label="password"
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input.Password className={styles.input} placeholder='enter your password' />
                                </Form.Item>
                                <Form.Item className={styles.buttonWrapper}>
                                    <Button
                                        type='primary'
                                        htmlType='submit'
                                        id={styles.buttonPrimary}
                                        loading={loading}
                                    >
                                        login
                                    </Button>
                                </Form.Item>
                                
                            </Form>
                            <div className={styles.forgotPassWrapper}>
                            <Link href="/forgotpassword" >
                                <a>forgot password ?</a>
                            </Link>
                            </div>
                           
                            <div className={styles.bottomTextWrapper}>
                                <Text className={styles.bottomText}>
                                    by logging in you agree to our community guidelines & terms of use, you do do not agree, please write to us on members@leap.club
                                </Text>
                            </div>
                            {/* {isError && (
                                <div className={styles.errorWrapper}>
                                    <span
                                        className={`${commonStyles.textCenter} ${commonStyles.highlightedText}`}
                                    >
                                        something went wrong! please try again later.
                                    </span>
                                </div>
                            )} */}
                </div>
  )
}

export default ChangePass