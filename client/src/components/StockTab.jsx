import React from 'react';
import { Container, Col } from 'react-bootstrap';
import CarCard from './car/CarCard';

export const StockTab = ({ vehicleData }) => {
  const { vehicles = [], page = 1, totalPages = 1 } = vehicleData;
  return (
    <div>
      <Container className='stock-listing-page'>
        {vehicles &&
          vehicles.length > 0 &&
          vehicles.map((vehicle, i) => (
            // <Col sm={12} md={6} lg={4}>
            <CarCard key={i} vehicle={vehicle} />
            // </Col>
          ))}
      </Container>
    </div>
  );
};
