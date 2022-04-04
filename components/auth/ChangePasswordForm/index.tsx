import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { Typography } from "antd";
import styles from "./ChangePassword.module.css";
import { LockOutlined } from "@ant-design/icons";
import { useAppDispatch } from "../../../app/hooks";

const { Text } = Typography;

const ChangePasswordForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

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
    <div className={styles.CpContainer}>
      <Form
        className="form"
        name="basic"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        form={form}
      >
        <Form.Item
          className={styles.CpInputLabel}
          label="enter old password"
          name="password"
          rules={[
            { required: true, message: "please input your old password!" },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            className={styles.CpInput}
            placeholder=" enter your password"
          />
        </Form.Item>
        <Form.Item
          className={styles.CpInputLabel}
          label="enter new password"
          name="password1"
          rules={[
            { required: true, message: "please input your new password!" },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            className={styles.CpInput}
            placeholder=" enter your password"
          />
        </Form.Item>
        <Form.Item
          className={styles.CpInputLabel}
          label="retype new password"
          name="password2"
          rules={[
            {
              required: true,
              message: "please input your new password again!",
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            className={styles.CpInput}
            placeholder=" enter your password"
          />
        </Form.Item>
        <Form.Item className={styles.CpButtonWrapper}>
          <Button
            type="primary"
            htmlType="submit"
            id={styles.CpButtonPrimary}
            loading={loading}
          >
            update password
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ChangePasswordForm;
