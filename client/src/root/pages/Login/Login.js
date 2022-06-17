import React from "react";
import { IAuthLogo } from "./../../assets/icon/IAuthLogo";
import { Form } from "antd";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { IPassword } from "./../../assets/icon/IPassword";
import { Checkbox } from "antd";
import { Button } from "antd";
import { useTranslation } from "react-i18next";
import styles from './index.module.css'
export const Login = ({
  onFinish,
  onFinishFailed,
  userName,
  handleKeyDownConnected,
  onChangeInputValueUserName,
  password,
  onChangeInputValuePassword,
}) => {
  const { t } = useTranslation("auth");

  return (
    <div className={styles.connectBody}>
      <div className={styles.connectContent}>
        <div className={styles.logoBlock}>
          <IAuthLogo />
        </div>
        <div className={styles.connectForm}>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 26,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input
                className={styles.success}
                prefix={<UserOutlined />}
                value={userName}
                onKeyDown={handleKeyDownConnected}
                onChange={onChangeInputValueUserName}
              />
            </Form.Item>
            <Form.Item
              name="password"
              placeholder="userName"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                className={styles.success}
                prefix={<IPassword />}
                value={password}
                onKeyDown={handleKeyDownConnected}
                onChange={onChangeInputValuePassword}
              />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button className={styles.connectBtn} htmlType="submit">
                {t("login")}
              </Button>
            </Form.Item>
          </Form>
          <p className={styles.forgetPass}>
            Forget your <span>password?</span>
          </p>
        </div>
      </div>
    </div>
  );
};
