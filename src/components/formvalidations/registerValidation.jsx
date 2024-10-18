import React, { useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
import axios from 'axios';
import { json, useNavigate } from 'react-router-dom';
//import SPACENEST from '../../assets/SPACENEST.png'




const { Option } = Select;

const RegisterForm = () => {
  const [form] = Form.useForm();
  const [userName, setUserName] = useState("");
  const [nameError, setNameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [gmail, setGmail] = useState("");
  const [gmailError, setGmailError] = useState("");
  const [mobile, setMobile] = useState("");
  const [mobileErr, setMobileErr] = useState("");
  const [state, setState] = useState(""); // State for the selected state
  const navigate = useNavigate()
  

  // List of Indian states
  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", 
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", 
    "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  // Username validation
  const userNameHandler = (e) => {
    const userEnteredName = e.target.value;
    setUserName(userEnteredName);
    const nameValidation = validateUserName(userEnteredName);
    if (nameValidation) {
      setNameError(nameValidation);
    } else {
      setNameError("");
    }
  };

  const validateUserName = (userName) => {
    let error = "";
    if (!userName) {
      error = "Please Enter the Username";
    }
    if (userName.length > 20) {
      error = "Please Enter <=20 Characters";
    }
    return error;
  };

  const userNameFocusHandler = () => {
    const nameValidation = validateUserName(userName);
    if (!userName) {
      setNameError("Please Enter the Username");
    }
  };

  // Password validation
  const passwordHandler = (e) => {
    const userEnteredPassword = e.target.value;
    setPassword(userEnteredPassword);
    const passwordValidation = validatePassword(userEnteredPassword);
    if (passwordValidation) {
      setPasswordError(passwordValidation);
    } else {
      setPasswordError("");
    }
  };

  const validatePassword = (password) => {
    let error = "";
    const passRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,10}$/;
    if (!password) {
      error = "please enter the password";
    } else if (!passRegex.test(password)) {
      error = "please enter the password correctly";
    }
    return error;
  };

  const passwordFocusHandler = () => {
    const passwordValidation = validatePassword(password);
    if (!password) {
      setPasswordError("Please Enter the Password");
    }
  };

  // Gmail validation
  const gmailHandler = (e) => {
    const userEnteredGmail = e.target.value;
    setGmail(userEnteredGmail);
    const gmailValidation = validateGmail(userEnteredGmail);
    if (gmailValidation) {
      setGmailError(gmailValidation);
    } else {
      setGmailError("");
    }
  };

  const validateGmail = (gmail) => {
    let error = "";
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!gmail) {
      error = "please enter the E-mail";
    } else if (!gmailRegex.test(gmail)) {
      error = "Please enter a valid Gmail address (e.g., user@gmail.com)";
    }
    return error;
  };

  // Mobile number validation
  const mobileHandler = (e) => {
    const mobileNumber = e.target.value;
    setMobile(mobileNumber);
    const errors = mobileValidation(mobileNumber);
    if (errors) {
      setMobileErr(errors);
    } else {
      setMobileErr("");
    }
  };

  const mobileValidation = (value) => {
    let errors = "";
    const mobileRegex = /^[6-9][0-9]{9}$/;
    if (!value) {
      errors = "enter the mobile number";
    } else if (!mobileRegex.test(value)) {
      errors = "please enter the correct mobile number";
    }
    return errors;
  };

  // State validation handler
  const handleStateChange = (value) => {
    setState(value);
  };

  // Form submission
  const onFinish = () => {
    if(nameError || passwordError || gmailError || mobileErr){
      alert("please fill the form properly")
    }
    else{
      navigate("/")
      postData()

    }
  };
  const postData=async()=>{
    const response=await axios.post("http://localhost:3000/userDetails",{
      username:userName,
      password:password,
      email:gmail,
      number:mobile,
      address:[]
    })
    console.log(response)
    localStorage.setItem("details",JSON.stringify({
      username:userName,
      email:gmail,
      number:mobile
    }))
  }

  return (
   <div 
   style={{
   
    //backgroundImage: `url(${SPACENEST})`, 
    backgroundImage: 'url("https://wallpaperaccess.com/full/1978968.jpg")',
    backgroundSize: 'cover',  // Cover the entire container
    backgroundPosition: 'center',  // Center the background image
    minHeight: '100vh', // Full viewport height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:"pink   "
  }}>

    <div>
    <h1 style={{ textAlign: 'center', color: 'white', marginBottom: '20px' }}>
          SpaceNest Registration Form
        </h1>
    <Form
      form={form}
      name="register"
      onFinish={onFinish}
      layout="vertical"
      style={{ 
        maxWidth: '400px', 
        width: '100%', 
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Transparent background to see the image
        padding: '20px', 
        borderRadius: '10px',
        boxShadow: '0 0 15px rgba(0,0,0,0.2)' 
      }} // Center the form
    >
      <Form.Item label="Username" name="username">
        <Input 
          placeholder="Enter your username" 
          value={userName} 
          onChange={userNameHandler} 
          onFocus={userNameFocusHandler}  
        />
        <span style={{color:"red"}}>{nameError}</span>
      </Form.Item>

      <Form.Item label="Password" name="password">
        <Input.Password 
          placeholder="Enter your password" 
          value={password} 
          onChange={passwordHandler}  
          onFocus={passwordFocusHandler}  
        />
        <span style={{color:"red"}}>{passwordError}</span>
      </Form.Item>

      <Form.Item label="Email" name="email">
        <Input 
          placeholder="Enter your email" 
          value={gmail} 
          onChange={gmailHandler}    
        />
        <span style={{color:"red"}}>{gmailError}</span>
      </Form.Item>

      <Form.Item label="Mobile Number" name="mobile">
        <Input 
          placeholder="Enter your mobile number" 
          value={mobile} 
          onChange={mobileHandler} 
        />
        <span style={{color:"red"}}>{mobileErr}</span>
      </Form.Item>

      <Form.Item label="Location Link" name="locationLink">
        <Input placeholder="Enter the location link" />
      </Form.Item>

      <Form.Item label="Address" name="address">
        <Input.TextArea placeholder="Enter your address" />
      </Form.Item>

      <Form.Item label="Pincode" name="pincode">
        <Input placeholder="Enter your pincode" />
      </Form.Item>

      {/* Dropdown for State */}
      <Form.Item label="State" name="state">
        <Select
          placeholder="Select your state"
          onChange={handleStateChange}
          value={state} // Controlled input for the state
        >
          {indianStates.map((state) => (
            <Option key={state} value={state}>
              {state}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item label="Aadhar Number" name="aadhar">
        <Input placeholder="Enter your Aadhar number" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Register
        </Button>
      </Form.Item>
    </Form>
    </div>
    
     
     
   </div>
  );
};

export default RegisterForm;
