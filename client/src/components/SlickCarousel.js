import React, { useState, useEffect } from 'react';
import '../index.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import placeholder from '../assets/img/placeholder.jpg';

// const settings = {
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   nextArrow: (
//     <div>
//       <div className='next-slick-arrow'> ⫸ </div>
//     </div>
//   ),
//   prevArrow: (
//     <div>
//       <div className='prev-slick-arrow'> ⫷ </div>
//     </div>
//   ),
//   dots: true,
//   infinite: true,
//   speed: 500,
//   lazyLoad: 'progressive',
//   responsive: [
//     {
//       breakpoint: 700,
//       settings: {
//         arrows: false,
//         slidesToShow: 3,
//       },
//     },
//     {
//       breakpoint: 500,
//       settings: {
//         arrows: false,
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 400,
//       settings: {
//         arrows: false,
//         slidesToShow: 1,
//       },
//     },
//   ],
// };

const settingsMain = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2000,
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

const slidesData = [
  {
    id: 1,
    title: 'First',
    label: '1st',
  },
  {
    id: 2,
    title: 'Second',
    label: '2nd',
  },
  {
    id: 3,
    title: 'Third',
    label: '3rd',
  },
  {
    id: 4,
    title: 'Fourth',
    label: '4th',
  },
  {
    id: 5,
    title: 'Fifth',
    label: '5th',
  },
  {
    id: 6,
    title: 'Sixth',
    label: '6th',
  },
];

const SlickCarousel = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });
  return (
    <div className='slider-wrapper'>
      <Slider
        {...settingsMain}
        asNavFor={nav2}
        ref={(slider) => setSlider1(slider)}
      >
        {slidesData.map((slide) => (
          <div className='slick-slide' key={slide.id}>
            {/* <h2 className='slick-slide-title'>{slide.title}</h2> */}
            <img
              className='slick-slide-image'
              src={`https://picsum.photos/800/400?img=${slide.id}`}
            />
            <label className='slick-slide-label'>{slide.label}</label>
          </div>
        ))}
      </Slider>
      <div className='thumbnail-slider-wrap'>
        <Slider
          {...settingsThumbs}
          asNavFor={nav1}
          ref={(slider) => setSlider2(slider)}
        >
          {slidesData.map((slide) => (
            <div className='slick-slide' key={slide.id}>
              <img
                className='slick-slide-image'
                src={`https://picsum.photos/800/400?img=${slide.id}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SlickCarousel;
