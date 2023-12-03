import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { slidesBannerMainPage } from "../constant";
const Banner = () => {
  return (
    <div>
      <Swiper spaceBetween={50} slidesPerView={"auto"}>
        {slidesBannerMainPage.map((slide) => (
          <SwiperSlide key={slide.imgSrc}>
            <img src={slide.imgSrc} alt="BannerSlide" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
