import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { slidesBannerMainPage } from "../constant";
import { Autoplay } from "swiper/modules";
import { EffectCoverflow } from "swiper/modules";
import { EffectFade } from 'swiper/modules';
import "swiper/css";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        grabCursor={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        slidesPerView={"auto"}
        autoplay={{
          delay: 3000,
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
