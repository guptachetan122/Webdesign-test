import React, { useState } from 'react'
import { Button, Form, Input } from 'antd'
import { Typography } from 'antd'
import 'antd/dist/antd.css';
import styles from './oldLogin.module.css';
import Link from 'next/link'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import useForm , {useAppDispatch} from '../../app/hooks';

const { Text } = Typography

const OldLoginPage = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false)
    const dispatch = useAppDispatch();
    const validateEmail = (email: string) => {
		const regex =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		return regex.test(email)
	}

	
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
                                    label='email'
                                    name='email'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'please enter your email',
                                        },
                                        () => ({
                                            validator(_, value) {
                                                if (!value) {
                                                    return Promise.reject()
                                                }
                                                if (!validateEmail(value.toLowerCase())) {
                                                    return Promise.reject('please enter a valid email')
                                                }
                                                return Promise.resolve()
                                            },
                                        }),
                                    ]}
                                >
                                    <Input  prefix={<UserOutlined className="site-form-item-icon" />} className={styles.input} placeholder=' gal@gadot.com' />
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

export default OldLoginPage