import React from 'react';
import CarCarousel from './CarCarousel';
import SlickCarousel from './SlickCarousel';
import { FaGasPump } from 'react-icons/fa';
import { GiGearStickPattern } from 'react-icons/gi';
import { GiNetworkBars } from 'react-icons/gi';

import {
  Container,
  Row,
  Col,
  Image,
  Card,
  Button,
  ListGroup,
} from 'react-bootstrap';
import placeholder from '../assets/img/placeholder.jpg';

const CarDetails = () => {
  // return <CarCarousel />;
  // return <SlickCarousel />;

  return (
    <Container>
      <Card className='my-3 p-3 rounded'>
        <SlickCarousel fluid />
        <Card.Body>
          <Card.Title as='div'>
            <strong>Car Make and Model</strong>
          </Card.Title>
          <Card.Text></Card.Text>
          <Card.Text as='h3'>£price</Card.Text>
        </Card.Body>
        <Container>
          <Row className='text-center'>
            <Col>
              <ListGroup.Item>
                <GiNetworkBars /> Mileage
              </ListGroup.Item>
            </Col>
            <Col>
              <ListGroup.Item>
                <FaGasPump /> Fuel
              </ListGroup.Item>
            </Col>
            <Col>
              <ListGroup.Item>
                <GiGearStickPattern /> Gearbox
              </ListGroup.Item>
            </Col>
          </Row>
        </Container>
      </Card>
    </Container>
  );
};

export default CarDetails;
