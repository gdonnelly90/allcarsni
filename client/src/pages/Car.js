import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import cars from '../cars';
// import CarouselSlider from '../components/CarouselSlider';

const CarScreen = ({ match }) => {
  const { id } = useParams();
  const car = cars.find((c) => c._id === id);
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={car.image1} alt={car.manufacturer} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{car.manufacturer}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              {car.model} {car.bodyType}
            </ListGroup.Item>
            <ListGroup.Item>{car.description}</ListGroup.Item>
            <ListGroup.Item>
              <h2>£{car.price}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={car.rating} text={`${car.numReviews} reviews`} />
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${car.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button className='btn-block' type='button'>
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CarScreen;

// import React, { useState, useEffect } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
// import Rating from '../components/Rating';
// import axios from 'axios';
// import cars from '../cars';

// // const Car = ({ match }) => {
// //   const car = cars.find((c) => c._id === match.params.id);

// //   return <div>{car.name}</div>;
// // };

// const Car = ({ match }) => {
//   const { id } = useParams();
//   const [car, setCar] = useState({});

//   useEffect(() => {
//     const fetchCar = async () => {
//       const { data } = await axios.get(`/api/cars/${id}`);

//       setCar(data);
//     };

//     fetchCar();
//   }, [match]);
// };

// export default Car;

// // const Car = ({ match }) => {
// //   const { id } = useParams();
// //   const [car, setCar] = useState({});

// //   useEffect(() => {
// //     const fetchCar = async () => {
// //       const { data } = await axios.get(`/api/cars/${id}`);

// //       setCar(data);
// //     };

// //     fetchCar();
// //   }, [match]);

// //   return (
// //     <>
// //       <Link className='btn btn-light my-3' to='/'>
// //         Go Back
// //       </Link>
// //       <Row>
// //         <Col md={6}>
// //           <Image src={car.image1} alt={car.manufacturer} fluid />
// //         </Col>
// //         <Col md={3}>
// //           <ListGroup variant='flush'>
// //             <ListGroup.Item>
// //               <h3>{car.manufacturer}</h3>
// //             </ListGroup.Item>
// //             <ListGroup.Item>
// //               {car.model} {car.bodyType}
// //             </ListGroup.Item>
// //             <ListGroup.Item>{car.description}</ListGroup.Item>
// //             <ListGroup.Item>
// //               <h2>£{car.price}</h2>
// //             </ListGroup.Item>
// //             <ListGroup.Item>
// //               <Rating value={car.rating} text={`${car.numReviews} reviews`} />
// //             </ListGroup.Item>
// //           </ListGroup>
// //         </Col>
// //         <Col md={3}>
// //           <Card>
// //             <ListGroup variant='flush'>
// //               <ListGroup.Item>
// //                 <Row>
// //                   <Col>Price:</Col>
// //                   <Col>
// //                     <strong>${car.price}</strong>
// //                   </Col>
// //                 </Row>
// //               </ListGroup.Item>
// //               <ListGroup.Item>
// //                 <Button className='btn-block' type='button'>
// //                   Add To Cart
// //                 </Button>
// //               </ListGroup.Item>
// //             </ListGroup>
// //           </Card>
// //         </Col>
// //       </Row>
// //     </>
// //   );
// // };
