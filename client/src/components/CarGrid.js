import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import placeholder from '../assets/img/placeholder.jpg';
import CarModal from '../components/CarModal';

// setting up the card element for the car card
const CarGrid = () => {
  return (
    <Container>
      {/* <Row className='text-center'> */}
      <Row>
        <Col sm={12} md={6} lg={4}>
          <CarModal />
        </Col>
      </Row>
    </Container>
  );
};

export default CarGrid;

{
  /* <Container>
  <div className='grid-container'>
    <Row>
      <Image src={placeholder} fluid />
    </Row>
    <Row>
      <Image src={placeholder} fluid />
    </Row>
    <Row>
      <Image src={placeholder} fluid />
    </Row>
  </div>
</Container> */
}
