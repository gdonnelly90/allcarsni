import React from 'react';
// import CarModal from './car/CarModal';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import CarCard from '../components/car/CarCard';
// import required modules
import { Autoplay, Navigation } from 'swiper';
// carousel basic code taken from swiperjs

export default function CarDetailCarousel() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          500: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          750: {
            slidesPerView: 2,
            spaceBetween: 40,
            padding: 20,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        // modules={[Autoplay, Pagination, Navigation]}
        modules={[Autoplay, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <CarCard />
        </SwiperSlide>
        <SwiperSlide>
          <CarCard />
        </SwiperSlide>
        <SwiperSlide>
          <CarCard />
        </SwiperSlide>
        <SwiperSlide>
          <CarCard />
        </SwiperSlide>
        <SwiperSlide>
          <CarCard />
        </SwiperSlide>
        <SwiperSlide>
          <CarCard />
        </SwiperSlide>
        <SwiperSlide>
          <CarCard />
        </SwiperSlide>
        <SwiperSlide>
          <CarCard />
        </SwiperSlide>
        <SwiperSlide>
          <CarCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import CarModal from './car/CarModal';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// // import required modules
// import { Pagination } from 'swiper';

// export default function CarDetailCarousel() {
//   return (
//     <>
//       <Swiper
//         slidesPerView={4}
//         spaceBetween={30}
//         centeredSlides={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination]}
//         className='mySwiper'
//       >
//         <SwiperSlide>
//           <CarModal />
//         </SwiperSlide>
//         <SwiperSlide>
//           <CarModal />
//         </SwiperSlide>
//         <SwiperSlide>
//           <CarModal />
//         </SwiperSlide>
//         <SwiperSlide>
//           <CarModal />
//         </SwiperSlide>
//         <SwiperSlide>
//           <CarModal />
//         </SwiperSlide>
//         <SwiperSlide>
//           <CarModal />
//         </SwiperSlide>
//         <SwiperSlide>
//           <CarModal />
//         </SwiperSlide>
//         <SwiperSlide>
//           <CarModal />
//         </SwiperSlide>
//         <SwiperSlide>
//           <CarModal />
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
