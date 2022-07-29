import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ReactPlayer from 'react-player';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image1 from '../assets/img/latestnews_slider/bmw_m5_1.webp';
import Image2 from '../assets/img/latestnews_slider/bmw_m5_7.webp';
import Image3 from '../assets/img/latestnews_slider/bmw_m5_2.webp';
import Image4 from '../assets/img/latestnews_slider/bmw_m5_3.webp';
import Image5 from '../assets/img/latestnews_slider/bmw_m5_4.webp';
import Image6 from '../assets/img/latestnews_slider/bmw_m5_5.webp';
import Image7 from '../assets/img/latestnews_slider/bmw_m5_6.webp';
import CarModal from './car/CarModal';
// basic code taken from kenwheeler.github.io/slick/

// const images = [
//   { name: 'image1', src: Image1 },
//   { name: 'image2', src: Image2 },
//   { name: 'image3', src: Image3 },
//   { name: 'image4', src: Image4 },
//   { name: 'image5', src: Image5 },
//   { name: 'image6', src: Image6 },
//   { name: 'image7', src: Image7 },
// ];

function TheNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{ display: '>', background: 'grey' }}
      onClick={onClick}
    />
  );
}

function ThePreviousArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{ display: '<', background: 'grey' }}
      onClick={onClick}
    />
  );
}

const CarDetailCarousel = () => {
  const settings = {
    className: 'center',
    arrows: true,
    centerMode: true,
    infinite: true,
    centerPadding: '80px',
    slidesToShow: 3,
    prevArrow: <ThePreviousArrow />,
    nextArrow: <TheNextArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerPadding: '30px',

          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 1,
          centerPadding: '30px',
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '20px',
        },
      },
    ],
    // centerMode: true,
    // infinite: true,
    // centerPadding: '20px',
    // dots: true,
    // slidesToShow: 3,
    // slidesToScroll: 1,
    // lazyLoad: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
  };

  return (
    <div className='cardetail-carousel'>
      <Slider {...settings}>
        <div className='p-3'>
          <CarModal />
        </div>
        <div className='p-3'>
          <CarModal />
        </div>
        <div className='p-3'>
          <CarModal />
        </div>
        <div className='p-3'>
          <CarModal />
        </div>
        <div className='p-3'>
          <CarModal />
        </div>
        <div className='p-3'>
          <CarModal />
        </div>
        <div className='p-3'>
          <CarModal />
        </div>
        <div className='p-3'>
          <CarModal />
        </div>
      </Slider>
    </div>
  );
};

export default CarDetailCarousel;

{
  /* {images.map((image) => {
  return (
    <div>
      <img width='100%' src={image.src} />
    </div>
  );
})} */
}
