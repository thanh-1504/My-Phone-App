import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { testSlider } from "../constant";
import "swiper/css";

const BannerOfProducts = () => {
  return (
    <div className="mb:pt-[62px] lg:pt-0">
      <Swiper loop={true} spaceBetween={50} slidesPerView={"auto"}>
        {testSlider.map((slide) => (
          <SwiperSlide key={slide.imgSrc}>
            <img src={slide.imgSrc} alt="BannerSlideMainPage" clas />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerOfProducts;
