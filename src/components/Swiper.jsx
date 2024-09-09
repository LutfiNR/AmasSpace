// Import Swiper React components
"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const SwiperComponent = () => {
  return (
    <Swiper
      spaceBetween={50}
      breakpoints={{
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
        },
    }}
    >
      <SwiperSlide className=''>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      ...
    </Swiper>
  );
};

export default SwiperComponent