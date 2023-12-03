import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { slidesBannerMainPage } from "../constant";
import { Autoplay } from "swiper/modules";
const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {slidesBannerMainPage.map((slide) => (
          <SwiperSlide key={slide.imgSrc}>
            <img src={slide.imgSrc} alt="BannerSlideMainPage" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
