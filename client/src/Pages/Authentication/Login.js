import React from 'react';
import { message } from 'antd';
import { useHistory } from "react-router-dom";
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { MailOutlined } from '@ant-design/icons';
import { useAuth } from '../../Hooks/context';
const data = require('../../Data/data.json');

const waitTime = (time = 100) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });
};

export const Login = () => {
    const [auth, handleAuth] = useAuth();
    let history = useHistory();

    return (
        <div
            style={{
                width: 330,
                margin: 'auto',
            }}
        >
            <ProForm
                onFinish={async () => {
                    await waitTime(2000);
                    message.success('Logged in successfully');
                    handleAuth(true, data);
                    history.push("/");
                }}
                submitter={{
                    searchConfig: {
                        submitText: 'Log in',
                    },
                    render: (_, dom) => dom.pop(),
                    submitButtonProps: {
                        size: 'large',
                        style: {
                            width: '100%',
                        },
                    },
                }}
            >
                <h1
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Sign in
                </h1>
                <div
                    style={{
                        marginTop: 12,
                        textAlign: 'center',
                        marginBottom: 40,
                    }}
                >
                    Please sign in to continue.
                </div>
                <ProFormText
                    fieldProps={{
                        size: 'large',
                        prefix: <MailOutlined />,
                    }}
                    name="email"
                    placeholder="Please enter email address"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your email address',
                        },
                        {
                            pattern: /^[a-zA-Z0-9_\-.]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
                            message: 'Invalid email address',
                        },
                    ]}
                    label="Email"
                />
                <ProFormText.Password width="md" name="password" label="Password" placeholder="Enter your password"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your password',
                        },
                    ]}
                />
            </ProForm>
        </div>
    );
};