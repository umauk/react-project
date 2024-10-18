import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const RentSpotSection = () => {
    const handleRegister = () => {
        // Add registration logic here
        console.log("Register button clicked!");
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1>Welcome to SpaceNest</h1>
            <p>List your parking spot and start earning!</p>
            {/* Ant Design Register Button */}
            
            <Link to={"/register"}>
            <Button type="primary" size="large" onClick={handleRegister}>Register Now</Button>
            </Link>
            
        </div>
    );
};

export default RentSpotSection;
