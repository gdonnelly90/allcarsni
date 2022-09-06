import React from 'react';
import { Carousel } from 'react-bootstrap';
import CarCard from '../components/car/CarCard';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// carousel basic code taken from swiperjs

export function CarDetailCarousel({ carouselVehicles }) {
  let navigate = useNavigate();

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: '70px',
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
    ],
  };

  const onVehicleClick = (_id) => {
    // navigate(`/vehicle/${_id}`);
    window.open(`http://localhost:3000/vehicle/${_id}`, 'blank');
  };

  return (
    // <div>
    <Slider {...settings}>
      {carouselVehicles &&
        carouselVehicles.map((vehicle, i) => (
          <Carousel.Item key={i} onClick={() => onVehicleClick(vehicle._id)}>
            <CarCard key={i} vehicle={vehicle} />
          </Carousel.Item>
        ))}
    </Slider>
    // </div>
    // <Carousel pause='hover'>
    //   {carouselVehicles &&
    //     carouselVehicles.map((vehicle, i) => (
    //       <Carousel.Item key={i}>
    //         <CarCard key={i} vehicle={vehicle} />
    //       </Carousel.Item>
    //     ))}
    // </Carousel>
  );
}

// other carousel
// <>
//       <Swiper
//         slidesPerView={3}
//         spaceBetween={30}
//         slidesPerGroup={1}
//         loop={true}
//         loopFillGroupWithBlank={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         breakpoints={{
//           500: {
//             slidesPerView: 1,
//             spaceBetween: 20,
//           },
//           750: {
//             slidesPerView: 2,
//             spaceBetween: 40,
//             padding: 20,
//           },
//           1000: {
//             slidesPerView: 3,
//             spaceBetween: 50,
//           },
//         }}
//         navigation={true}
//         // modules={[Autoplay, Pagination, Navigation]}
//         modules={[Autoplay, Navigation]}
//         className='mySwiper'>
//         {carouselVehicles &&
//           carouselVehicles.map((vehicle, i) => {
//             return <CarCard key={i} vehicle={vehicle} />;
//           })}
//       </Swiper>
//     </>
