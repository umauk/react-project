
// import axios from 'axios';
// import React, { useState } from 'react'
// import { useNavigation } from 'react-router-dom';

// const Loginvalidations = () => {
//     const [loginDetails,setLoginDetails]=useState({
//         email:"",
//         password:""
//     })
//     const [isLogin,setIsLogin]=useState(false)
    
//     //const navigation=useNavigation()
//     const onchangeHandler=(e)=>{
//         e.preventDefault();
//         const {name,value}=e.target
//         setLoginDetails({...loginDetails,[name]:value})
//     }
//     const submitHandler=async(event)=>{
//         event.preventDefault();
//         const response=await axios.get("http://localhost:3000/userDetails")
//         const data=response.data
//         const findData=data.find((each)=>each.email==loginDetails.email && each.password==loginDetails.password)
//         if(findData){
//           setIsLogin(true);
//           console.log(findData)
//         }
//         else{
//           setIsLogin(false);
//           alert("Invalid Email or Password")
//         }
        
//     }
//   return (
//     <div>
//       <form onSubmit={submitHandler}>
//         <input type='email' value={loginDetails.email} name='email' onChange={onchangeHandler} />
//         <input type='text' value={loginDetails.password} name='password' onChange={onchangeHandler}/>
//         <input type='submit'/>
//       </form>
//     </div>
//   )
// }

// export default Loginvalidations;






import React, { useState } from 'react';

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Row, Col } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginValidations = () => {
  const navigate=useNavigate()

  const [loginDetails,setLoginDetails]=useState({
             email:"",
             password:""
        })
       
        
  const loginUserHandler=(e)=>{
    e.preventDefault();
    const {name,value}=e.target
  
    setLoginDetails({...loginDetails,[name]:value})
  }
        

  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    try {
      const response = await axios.get("http://localhost:3000/userDetails");
      const data=response.data
      const findData=data.find((each)=>each.email==loginDetails.email && each.password==loginDetails.password)
      if(findData){
        alert("user successfully Login")
        navigate('/ownerDetails')
        localStorage.setItem("details",JSON.stringify({
          email:loginDetails.email
        
        }))
     
      }
      else{
        alert("userdetails or password are Incorrect")
       
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  return (
    <Row justify="center" style={{ marginTop: '50px' }}>
      <Col span={8}>
        <Form
          name="login"
          initialValues={{ remember: true }}
          style={{ maxWidth: 360 }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input prefix={<UserOutlined />} name='email' placeholder="Username" value={loginDetails.email} onChange={loginUserHandler} />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input prefix={<LockOutlined />} name='password' value={loginDetails.password} type="password" placeholder="Password" onChange={loginUserHandler} />
          </Form.Item>

          <Form.Item>
            <Row justify="space-between" align="middle">
              <Col>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
              </Col>
              <Col>
                <a href="">Forgot password</a>
              </Col>
            </Row>
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Log in
            </Button>
            or <a href="">Register now!</a>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default LoginValidations;


















