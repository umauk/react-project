
import React from "react";
import { Row, Col } from "antd";
import 'antd/dist/reset.css'; 
import ContactInfo from "./contactInformation";
import ContactForm from "./contactForm";
import Navbar from "../header";



function OwnerDetails() {
  return (
    <>
    <div className="container">
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} md={10}>
          <ContactInfo />
        </Col>
        <Col xs={24} md={14}>
          <ContactForm />
        </Col>
      </Row>
    </div>
    </>
    
  );
}

export default OwnerDetails;
