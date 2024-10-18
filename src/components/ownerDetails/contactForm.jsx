import React, { useEffect, useState } from "react";
import { Form, Input, Button, Upload } from "antd";
import { PlusOutlined, SendOutlined } from "@ant-design/icons";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { response } from "../../../store/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [area, setArea] = useState("");
  const [details, setUpdateDetails] = useState({
    areaName:"",
    locationLink: "",
    address: "",
    images: [],
  });

  const { email } = JSON.parse(localStorage.getItem("details")) || {};
  const { userData } = useSelector((state) => state.userDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    dispatch(response());
  }, [dispatch]);

  const onFinish = async () => {
    try {
      const filterData = userData.find((eachData) => eachData.email === email);

      if (filterData) {
        const userId = filterData.id;

        const detailsData = {
          ...filterData,
          ...details,
        };

        const res = await axios.put(
          `http://localhost:3000/userDetails/${userId}`,
          detailsData
        );

        localStorage.setItem("area", JSON.stringify(details.areaName));

        toast.success("Details are successfully submitted!", {
          onClose: () => navigate("/"),
        });

        console.log(res);
      }
    } catch (err) {
      console.log(err);
      toast.error("Failed to submit details. Please try again.");
    }
  };

  const handleFileChange = ({ fileList }) => {
    const file = fileList[0]?.originFileObj;

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUpdateDetails((prevState) => ({
          ...prevState,
          images: [...prevState.images, reader.result],
        }));
      };
      reader.readAsDataURL(file);
    }
    setFileList(fileList);
  };

  const detailsHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUpdateDetails({ ...details, [name]: value });
  };

  return (
    <div className="form-section">
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item label="Full Name" name="name" rules={[{ required: true, message: "Please input your full name!" }]}>
          <Input placeholder="Full Name" />
        </Form.Item>

        <Form.Item label="Email" name="email" rules={[{ required: true, type: "email", message: "Please input a valid email!" }]}>
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item label="Contact No." name="contact" rules={[{ required: true, message: "Please input your contact number!" }]}>
          <Input placeholder="Contact No." />
        </Form.Item>

        <Form.Item label="Location Link" name="locationLink" rules={[{ required: true, message: "Please input the location link!" }]}>
          <Input placeholder="Google Maps/Other Location Link" name="locationLink" value={details.locationLink} onChange={detailsHandler} />
        </Form.Item>

        <Form.Item label="Area" name="areaName" rules={[{ required: true, message: "Please enter your area!" }]}>
          <Input placeholder="Enter the area"  name="areaName" value={details.locationLink} onChange={detailsHandler} />
        </Form.Item>

        <Form.Item label="Address" name="address" rules={[{ required: true, message: "Please input the address!" }]}>
          <Input.TextArea rows={3} placeholder="Enter the address" name="address" value={details.address} onChange={detailsHandler} />
        </Form.Item>

        <Form.Item label="Upload Images (Max 4)" rules={[{ required: true, message: "Please upload at least 1 image!" }]}>
          <Upload listType="picture-card" fileList={fileList} onChange={handleFileChange} beforeUpload={() => false}>
            {fileList.length < 4 && (
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            )}
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" icon={<SendOutlined />}>
            Send Information
          </Button>
        </Form.Item>
      </Form>

      <ToastContainer />
    </div>
  );
};

export default ContactForm;
