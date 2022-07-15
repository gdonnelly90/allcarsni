import React from 'react';
import { Container } from 'react-bootstrap';
import CarDetails from '../components/CarDetails';

// calling the car details component
const CarCloseDetail = () => {
  return (
    <div>
      <Container>
        <CarDetails />
      </Container>
    </div>
  );
};

export default CarCloseDetail;
