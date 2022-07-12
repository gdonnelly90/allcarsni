import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Car from '../components/Car';
import axios from 'axios';
// import cars from '../cars';

const Home = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    const fetchCars = async () => {
      const { data } = await axios.get('/api/cars');

      setCars(data);
    };
    fetchCars();
  }, []);

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
