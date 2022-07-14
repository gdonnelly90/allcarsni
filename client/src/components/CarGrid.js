import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import placeholder from '../assets/img/placeholder.jpg';
import CarModal from '../components/CarModal';

// Row = 12 cols oe 100%

const CarGrid = () => {
  return (
    <Container>
      {/* <Container>
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
      </Container> */}
      <Container>
        <div className='grid-container'>
          <Row className='text-centre'>
            <Col sm={1} md={2} lg={3} xl={3}>
              <p></p>
              <CarModal />
            </Col>
            <Col sm={1} md={2} lg={3} xl={3}>
              <p></p>
              <CarModal />
            </Col>
            <Col sm={1} md={2} lg={3} xl={3}>
              <p></p>
              <CarModal />
            </Col>
          </Row>
          <Row className='text-centre'>
            <Col sm={1} md={2} lg={3} xl={3}>
              <p></p>
              <CarModal />
            </Col>
            <Col sm={1} md={2} lg={3} xl={3}>
              <p></p>
              <CarModal />
            </Col>
            <Col sm={1} md={2} lg={3} xl={3}>
              <p></p>
              <CarModal />
            </Col>
          </Row>
          <Row className='text-centre'>
            <Col sm={1} md={2} lg={2} xl={3}>
              <p></p>
              <CarModal />
            </Col>
            <Col sm={1} md={2} lg={3} xl={3}>
              <p></p>
              <CarModal />
            </Col>
            <Col sm={1} md={2} lg={3} xl={3}>
              <p></p>
              <CarModal />
            </Col>
          </Row>
        </div>
      </Container>
    </Container>
  );
};

export default CarGrid;