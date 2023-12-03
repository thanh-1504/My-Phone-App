import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { slidesBannerMainPage } from "../constant";
const Banner = () => {
  return (
    <div>
      <Swiper spaceBetween={50} slidesPerView={"auto"}>
       {slidesBannerMainPage}
      </Swiper>
    </div>
  );
};

export default Banner;
