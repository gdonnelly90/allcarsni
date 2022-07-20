import React, { useState, useEffect } from 'react';
import '../../index.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarCarouselb = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: (
      <div>
        <div className='next-slick-arrow'> ⫸ </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className='prev-slick-arrow'> ⫷ </div>
      </div>
    ),
    // dots: true,
    infinite: true,
    speed: 500,
    asNavFor: '.slider-nav',
    lazyLoad: 'progressive',
    responsive: [
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  const settingsThumbs = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '10px',
  };
  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settingsMain}>
        <div>
          <img
            src={require('../../assets/img/cars/Audi_R8_V10_1.jpg')}
            alt='AllCarsNI Logo'
          />
        </div>
        <div>
          <img src={require('../../assets/img/cars/Audi_R8_V10_2.jpg')} />
        </div>
        <div>
          <img src={require('../../assets/img/cars/Audi_R8_V10_3.jpg')} />
        </div>
        <div>
          <img src={require('../../assets/img/cars/Audi_R8_V10_4.jpg')} />
        </div>
        <div>
          <img src={require('../../assets/img/cars/Audi_R8_V10_5.jpg')} />
        </div>
      </Slider>
    </div>
  );
};

export default CarCarouselb;
