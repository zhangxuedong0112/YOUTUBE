import React from "react";
import { Input, Form, Checkbox, Button} from "antd";

export default class extends React.Component<any, any> {
    

    render(){
        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
        };
        const tailLayout = {
            wrapperCol: { offset: 8, span: 16 },
        };
        
        const onFinish = values => {
            console.log('Success:', values);
        };
        
        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };
        
        return <div>
            <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                label="Confirm Password"
                name="confirmPassword"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    注册
                </Button>
            </Form.Item>
            </Form>
        </div>
    }
}