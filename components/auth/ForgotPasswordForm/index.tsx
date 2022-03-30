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
      <div className={styles.TextWrapper2}>
        <Text className={styles.Text2}> recover your leap account </Text>
      </div>
      <div className={styles.waitlistContainer}>
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
            className={styles.inputLabel}
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
              className={styles.input}
              placeholder=" gal@gadot.com"
            />
          </Form.Item>
          <Form.Item className={styles.buttonWrapper}>
            <Button
              type="primary"
              htmlType="submit"
              id={styles.buttonPrimary}
              loading={loading}
            >
              reset password
            </Button>
          </Form.Item>
        </Form>
        <div className={styles.forgotPassWrapper}>
          <Link href="/login">
            <a className={styles.linkstyle}>sign in ?</a>
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
    </>
  );
};

export default ForgotPasswordForm;
