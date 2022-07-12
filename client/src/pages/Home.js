import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Car from '../components/Car';
import cars from '../cars';

const Home = () => {
  return (
    <>
      <h1>Latest Cars</h1>
      <Row>
        {cars.map((car) => (
          <Col key={car._id} sm={12} md={6} lg={4} xl={3}>
            <Car car={car} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
