import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ReactPlayer from 'react-player';
import Image1 from '../../assets/img/latestnews_slider/bmw_m5_1.webp';
import Image2 from '../../assets/img/latestnews_slider/bmw_m5_7.webp';
import Image3 from '../../assets/img/latestnews_slider/bmw_m5_2.webp';
import Image4 from '../../assets/img/latestnews_slider/bmw_m5_3.webp';
import Image5 from '../../assets/img/latestnews_slider/bmw_m5_4.webp';
import Image6 from '../../assets/img/latestnews_slider/bmw_m5_5.webp';
import Image7 from '../../assets/img/latestnews_slider/bmw_m5_6.webp';
// import Video from '../../assets/img/latestnews_slider/m5_comp_video.mp4';

export const FeaturedReviewCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className='d-block w-100'
          style={{ height: '296.02px' }}
          src={Image1}
          alt='First slide'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          style={{ height: '296.02px' }}
          src={Image2}
          alt='Second slide'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          style={{ height: '296.02px' }}
          src={Image3}
          alt='Third slide'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          style={{ height: '296.02px' }}
          src={Image4}
          alt='Fourth slide'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          style={{ height: '296.02px' }}
          src={Image5}
          alt='Fifth slide'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          style={{ height: '296.02px' }}
          src={Image6}
          alt='Sixth slide'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          style={{ height: '296.02px' }}
          src={Image7}
          alt='Seventh slide'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          style={{ height: '296.02px' }}
          src={Image1}
          alt='First slide'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          style={{ height: '296.02px' }}
          src={Image2}
          alt='Second slide'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          style={{ height: '296.02px' }}
          src={Image3}
          alt='Third slide'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          style={{ height: '296.02px' }}
          src={Image4}
          alt='Fourth slide'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          style={{ height: '296.02px' }}
          src={Image5}
          alt='Fifth slide'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          style={{ height: '296.02px' }}
          src={Image6}
          alt='Sixth slide'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          style={{ height: '296.02px' }}
          src={Image7}
          alt='Seventh slide'
        />
      </Carousel.Item>
    </Carousel>
  );
};
