import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../../assets/m5/m5a.jpg';
import Image2 from '../../assets/m5/m5b.jpg';
import Image3 from '../../assets/m5/m5c.jpg';
import Image4 from '../../assets/m5/m5d.jpg';
import Image5 from '../../assets/m5/m5e.jpg';
import Image6 from '../../assets/m5/m5f.jpg';
import Image7 from '../../assets/m5/m5g.jpg';
import Image8 from '../../assets/m5/m5h.jpg';
import Image9 from '../../assets/m5/m5i.jpg';
import Image10 from '../../assets/m5/m5j.jpg';
import Image11 from '../../assets/m5/m5k.jpg';
import Image12 from '../../assets/m5/m5l.jpg';

export const ReviewCarouselModal = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className='d-block w-100 p-5' src={Image1} alt='First slide' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100 p-5' src={Image2} alt='Second slide' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100 p-5' src={Image3} alt='Third slide' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100 p-5' src={Image4} alt='Fourth slide' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100 p-5' src={Image5} alt='Fifth slide' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100 p-5' src={Image6} alt='Sixth slide' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100 p-5' src={Image7} alt='Seventh slide' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100 p-5' src={Image8} alt='First slide' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100 p-5' src={Image9} alt='Second slide' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100 p-5' src={Image10} alt='Third slide' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100 p-5' src={Image11} alt='Fourth slide' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100 p-5' src={Image12} alt='Fifth slide' />
      </Carousel.Item>
    </Carousel>
  );
};
