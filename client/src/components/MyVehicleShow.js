import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const MyVehicleShow = () => {
  return (
    <Container>
      <Row xs={1} sm={2} md={2}>
        <Col>
          <Image src={require('../assets/img/profilePic.jpg')} />
        </Col>
        <Col>
          <h2>Make, Model and Spec</h2>
          <p></p>
          <h5>Registration:</h5>
          <h5>Mileage:</h5>
          <h5>Fuel Type:</h5>
          <h5>Engine Size:</h5>
          <h5>Transmission:</h5>
          <h5>Colour:</h5>
          <h5>First Registered:</h5>
        </Col>
      </Row>
    </Container>
  );
};

export default MyVehicleShow;
