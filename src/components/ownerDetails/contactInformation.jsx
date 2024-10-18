
import React from "react";
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from "@ant-design/icons";


const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h2>Got a question?</h2>
      <p>Fill up the form and our team will get back to you within 24 hours.</p>
      <div className="info-item">
        <PhoneOutlined style={{ color: "#faad14", fontSize: "20px", marginRight: "10px" }} />
        <p>+91 74882 39471</p>
      </div>
      <div className="info-item">
        <MailOutlined style={{ color: "#faad14", fontSize: "20px", marginRight: "10px" }} />
        <p>connect@parkspot.in</p>
      </div>
      <div className="info-item">
        <EnvironmentOutlined style={{ color: "#faad14", fontSize: "20px", marginRight: "10px" }} />
        <p>2nd Floor, Nextcoworks, BTM Layout, Bengaluru, Karnataka 560076</p>
      </div>
      <div className="social-media">
      <i className="ri-facebook-fill"></i>
      <i className="ri-instagram-fill"></i>
      <i className="ri-linkedin-fill"></i>
      </div>
    </div>
  );
};

export default ContactInfo;
