import React, { useState } from 'react'
import { Button, Form, Input } from 'antd'
import { Typography } from 'antd'
import styles from './ChangePassword.module.css';
import Link from 'next/link'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import useForm , {useAppDispatch} from '../../app/hooks'


const { Text } = Typography

const ChangePasswordForm = () => {
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
                                    label="enter old password"
                                    name="password"
                                    rules={[{ required: true, message: 'please input your old password!' }]}
                                >
                                    <Input className={styles.input} placeholder='enter your password' />
                                </Form.Item>
                                <Form.Item
                                    className={styles.inputLabel}
                                    label="enter new password"
                                    name="password1"
                                    rules={[{ required: true, message: 'please input your new password!' }]}
                                >
                                    <Input.Password className={styles.input} placeholder='enter your password' />
                                </Form.Item>
                                <Form.Item
                                    className={styles.inputLabel}
                                    label="retype new password"
                                    name="password2"
                                    rules={[{ required: true, message: 'please input your new password again!' }]}
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
                                        update password
                                    </Button>
                                </Form.Item>
                                
                            </Form>
                           
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

export default ChangePasswordForm