import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import classes from "./Slider.module.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Slide from "./Slide";

function Slider(props) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className={classes.slider}
      >
        {props.data.map((product) => (
          <SwiperSlide key={product.id} className={classes.swiperSlide}>
            <Slide product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Slider;
