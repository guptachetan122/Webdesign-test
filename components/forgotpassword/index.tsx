import React, { useState } from 'react'
import { Button, Form, Input } from 'antd'
import { Typography } from 'antd'
import 'antd/dist/antd.css';
import styles from './ForgotPass.module.css';
import Link from 'next/link'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Image from 'next/Image'
import useForm , {useAppDispatch} from '../../app/hooks'


const { Text } = Typography

const ForgotPass = () => {
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
		}
    }

  return (
        <div className={styles.waitlistContainer}>
            <h2 className={styles.h2}> Enter Your Registered Email-ID</h2>
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
                                
                                <Form.Item className={styles.buttonWrapper}>
                                    <Button
                                        type='primary'
                                        htmlType='submit'
                                        id={styles.buttonPrimary}
                                        loading={loading}
                                    >
                                        reset password
                                    </Button>
                                </Form.Item>
                                
                            </Form>
                            <div className={styles.forgotPassWrapper}>
                            <Link href="/forgotpassword" >
                                <a>forgot password ?</a>
                            </Link>
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

export default ForgotPass