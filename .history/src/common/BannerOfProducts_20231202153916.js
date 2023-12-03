import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Thumbs } from "swiper/modules";
import ImageItem from "../components/ImageItem";

const BannerOfProducts = ({ dataImg }) => {
  const [activeThumb, setActiveThumb] = useState(null);
  if (!dataImg) return;
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
        {dataImg.map((slide) => (
          <SwiperSlide key={slide.imgSrc} className="lg:!w-[535px]">
            <img
              src={slide}
              alt="BannerSlideMainPage"
              className="lg:w-[523px] lg:h-[535px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <section className="list-image">
        <Swiper
          onSwiper={setActiveThumb}
          modules={[Thumbs]}
          watchSlidesProgress={true}
          freeMode={true}
          grabCursor={true}
          slidesPerView={"auto"}
          className="lg:!ml-10 mb:!ml-0 lg:w-[535px] "
        >
          {dataImg.map((slide) => (
            <SwiperSlide className="mb:!w-[65px] lg:!w-[89px] md:!w-[110px] md:">
              <ImageItem
                srcImg={slide}
                style="mb:w-[54px] mb:h-[54px] rounded-lg lg:w-[79px] lg:h-[79px] lg:ml-2 bg-white lg:p-[5px]"
              ></ImageItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default BannerOfProducts;
