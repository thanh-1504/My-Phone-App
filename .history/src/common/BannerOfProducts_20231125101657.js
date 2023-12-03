import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { testSlider } from "../constant";
import "swiper/css";
import { Thumbs } from "swiper/modules";

const BannerOfProducts = () => {
  const [activeThumb, setActiveThumb] = useState(null);
  return (
    <div className="mb:pt-[62px] lg:pt-0 ">
      <Swiper
        loop={true}
        modules={[Thumbs]}
        thumbs={{ swiper: activeThumb }}
        spaceBetween={50}
        slidesPerView={"auto"}
        className="lg:w-[535px] lg:!ml-[50px] "
      >
        {testSlider.map((slide) => (
          <SwiperSlide key={slide.imgSrc} className="lg:!w-[535px]">
            <img
              src={slide.imgSrc}
              alt="BannerSlideMainPage"
              className="lg:w-[523px] lg:h-[535px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerOfProducts;
