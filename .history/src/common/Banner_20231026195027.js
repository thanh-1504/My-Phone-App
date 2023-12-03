import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { slidesBannerMainPage } from "../constant";
import { Autoplay } from "swiper/modules";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectCoverflow} from 'swiper/modules';

const Banner = () => {
  return (
    <div>
      <Swiper
      effect={'coverflow'}
        spaceBetween={50}
        grabCursor={true}
        modules={[EffectFade, Autoplay]}
        slidesPerView={"auto"}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
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
