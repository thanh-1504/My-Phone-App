import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
{
  /* <img
src="https://www.bihouse.vn/img_data/images/427794252185-BANNER-1.jpg"
alt="Banner"
/> */
}
const Banner = () => {
  return (
    <div>
      <Swiper
      spaceBetween={50}
      slidepr>
      
        <SwiperSlide>
          <img
            src="https://www.bihouse.vn/img_data/images/427794252185-BANNER-1.jpg"
            alt="Banner"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
