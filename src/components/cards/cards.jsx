import React from 'react';
import { Card, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap';

const CardExample = () => {
  return (
    <div>
        
        <div style={{ marginTop:'50px',display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '20px' }}>
      <Card
        className="my-2"
        color="primary"
        inverse
        style={{
          width: '18rem',
        }}
      >
        <CardHeader>Security Features</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Space safety</CardTitle>
          <CardText>Verification of parking spaces for amenities like security cameras, attendants, and lighting.</CardText>
          <CardText>Owners can manage and verify vehicle license plates for enhanced security.</CardText>
        </CardBody>
      </Card>

      <Card
        className="my-2"
        color="secondary"
        inverse
        style={{
          width: '18rem',
        }}
      >
        <CardHeader>Parking Space Management for Owners</CardHeader>
        <CardBody>
          
          <CardText>Owners can easily list their available spaces with photos, description, price, and rules.</CardText>
          <CardText>Owners can easily list their available spaces with photos, description, price, and rules.</CardText>
          
        </CardBody>
      </Card>

      <Card
        className="my-2"
        color="success"
        inverse
        style={{
          width: '18rem',
        }}
      >
        <CardHeader>Ratings & Reviews</CardHeader>
        <CardBody>
         {/*<CardTitle tag="h5">User reviews</CardTitle> */} 
          <CardText> Renters can rate and review the parking space after the booking.</CardText>
          <CardText>Space owners can also rate users based on how they handled the space</CardText>
          <CardText>This feature helps build trust among users and ensures transparency.</CardText>
          
        </CardBody>
      </Card>

      <Card
        className="my-2"
        color="danger"
        inverse
        style={{
          width: '18rem',
        }}
      >
        <CardHeader> Customer Support & FAQs</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Live call support</CardTitle>
          <CardText>A robust FAQ section and troubleshooting guides for common issues.</CardText>
        </CardBody>
      </Card>
    </div>
    </div>
  );
};

export default CardExample;
