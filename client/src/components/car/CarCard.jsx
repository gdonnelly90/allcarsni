import React from 'react';
import image1 from '../../assets/img/cars/Ferrari_LaFerrari_Aperta_1.jpg';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { LinkContainer } from 'react-router-bootstrap';
import { Row, Col, Image, Card, Button, ListGroup } from 'react-bootstrap';

// const CarCard = ({ car }) => {
const CarCard = () => {
  return (
    <LinkContainer to='/search/cardetail'>
      <Card className='my-3 p-3 rounded'>
        <Card.Img src={image1} variant='top' />
        <Card.Body>
          <Card.Title className='card-title-div'>
            Ferrari LaFerrari Aperta
          </Card.Title>
          <p className='card-desc-div pt-3'>
            The LaFerrari Aperta is a unique open-air supercar equipped with
            both a mid-rear, naturally-aspirated V12 engine, as well as an
            efficient 120kW electric motor for an outstanding powerful hybrid
            build.
          </p>
          <div className='bg--red-gradient2'></div>
          <Button disabled className='price-button-car-card mt-3'>
            <div className='card-price-text'>£3,500,000</div>
          </Button>
          <div className='bg--red-gradient2 mt-3'></div>
        </Card.Body>
      </Card>
    </LinkContainer>
  );
};

export default CarCard;
