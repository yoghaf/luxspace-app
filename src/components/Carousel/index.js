import React from "react";
import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "tailwindcss/tailwind.css";

function Carousel({ children }) {
  const breakpoints = {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },

    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };

  return (
    <Swiper breakpoints={breakpoints} pagination={{ clickable: true }} className="mySwiper">
      {children}
    </Swiper>
  );
}

export default Carousel;
