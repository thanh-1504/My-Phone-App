import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { slidesBannerMainPage } from "../constant";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const Banner = () => {
  return (
    <div>
      <Swiper
        loop={true}
        spaceBetween={50}
        grabCursor={true}
        momentum={true}
        speed={800}
        easing="linear"
        modules={[Autoplay]}
        slidesPerView={"auto"}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
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
