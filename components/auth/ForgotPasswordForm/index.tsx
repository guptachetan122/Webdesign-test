import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { Typography, Space } from "antd";
import styles from "./ForgotPassword.module.css";
import Link from "next/link";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import useForm, { useAppDispatch } from "../../../app/hooks";

const { Text } = Typography;

const ForgotPasswordForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const validateEmail = (email: string) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish = (values: any) => {
    const user = {
      email: values.email.toLowerCase().trim(),
      password: values.password.trim(),
    };

    console.log(user);
  };

  return (
    <>
      <div className={styles.TopTextWrap}>
        <Text className={styles.Text}> recover your leap account </Text>
      </div>
      <div className={styles.Container}>
        <div className={styles.TextWrapper}>
          <Text className={styles.Text}> enter your registered email-id </Text>
        </div>
        <Form
          className="form"
          name="basic"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          form={form}
        >
          <Form.Item
            className={styles.InputLabel}
            label="email"
            name="email"
            rules={[
              {
                required: true,
                message: "please enter your email",
              },
              () => ({
                validator(_, value) {
                  if (!value) {
                    return Promise.reject();
                  }
                  if (!validateEmail(value.toLowerCase())) {
                    return Promise.reject("please enter a valid email");
                  }
                  return Promise.resolve();
                },
              }),
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              className={styles.Input}
              placeholder=" gal@gadot.com"
            />
          </Form.Item>
          <Form.Item className={styles.ButtonWrapper}>
            <Button
              type="primary"
              htmlType="submit"
              id={styles.Button}
              loading={loading}
            >
              reset password
            </Button>
          </Form.Item>
        </Form>
        <div className={styles.SignInWrapper}>
          <Link href="/login">
            <a className={styles.SignInLink}>sign in ?</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordForm;
