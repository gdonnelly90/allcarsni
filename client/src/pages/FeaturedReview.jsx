import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
// import car_advert from '../assets/img/SampleAdvert.jpg';
// import car_advert from '../assets/img/SampleAdvert2.jpg';
// import car_advert from '../assets/img/SampleAdvert3.jpg';
// import car_advert from '../assets/img/SampleAdvert4.jpg';
import car_advert from '../assets/img/SampleAdvert5.jpg';
import { FeaturedReviewCarousel } from '../components/common/FeaturedReviewCarousel';

export const FeaturedReview = () => {
  return (
    // <div className='fullwidth-banner-pic'>
    <Container>
      <Row className='g-5'>
        <img className='advert-image pb-5' src={car_advert} />
      </Row>
      <Container className='actual-review-container'>
        <div className='review-carousel'>
          <FeaturedReviewCarousel />
        </div>
      </Container>
    </Container>
  );
};
