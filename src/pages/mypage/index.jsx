import React, { Component } from 'react'
import { Form, Input, Button,message} from 'antd';
import axios from 'axios'
import { withRouter } from "umi";
console.log(withRouter)
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  

export default function mytest(props){ 
    console.log(withRouter)
  
    const onFinish = values => {

        let formData = new FormData();
        formData.append('telephone', values.telephone);
        formData.append('password', values.password);

        axios({
            method: 'post',
            url: 'http://localhost:8082/api/auth/login',
            data:formData,
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then((res)=>{
            let {data} = res
            console.log(res)
          })
      };
    
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };
    const [form] = Form.useForm();
    return (
        <div> <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="telephone"
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
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form></div>
    )
}
