import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from '../components/Rating';

const Car = ({ car }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/car/${car._id}`}>
        <Card.Img src={car.image1} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/car/${car._id}`}>
          <Card.Title as='div'>
            <strong>
              {car.make} {car.model}
            </strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <Rating value={car.rating} text={` ${car.numReviews} reviews`} />
        </Card.Text>
        <Card.Text as='h3'>£{car.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Car;
