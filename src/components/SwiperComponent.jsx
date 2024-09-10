'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const SwiperComponent = ({ children }) => {
  const item = React.Children.toArray(children);
  return (
    <Swiper
      modules={[ A11y, Autoplay]}
      autoplay= {true}
      speed={4000}
      spaceBetween={50}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        767: {
          slidesPerView: 2,
        },
        1025: {
          slidesPerView: 3,
        },
      }}
      >
      {item.map((item, index) => (
        <SwiperSlide key={index} className=''>{item}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
