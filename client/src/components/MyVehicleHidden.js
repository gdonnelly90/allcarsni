import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const MyVehicleHidden = () => {
  return (
    <Container>
      <Row sm={2} md={2}>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
    </Container>
  );
};

export default MyVehicleHidden;
