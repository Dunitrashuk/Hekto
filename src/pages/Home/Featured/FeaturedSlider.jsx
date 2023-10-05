import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import classes from "./FeaturedSlider.module.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import FeaturedCard from "./FeaturedCard";

function FeaturedSlider(props) {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className={classes.featured__slider}
      >
        {props.data.map((product) => (
          <SwiperSlide key={product.id} className={classes.featured__slide}>
            <FeaturedCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default FeaturedSlider;
