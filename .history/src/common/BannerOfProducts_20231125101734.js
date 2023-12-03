import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { testSlider } from "../constant";
import "swiper/css";
import { Thumbs } from "swiper/modules";
import ImageItem from "../components/ImageItem";

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
      <section className="list-image">
                  <Swiper
                    onSwiper={setActiveThumb}
                    modules={[Thumbs]}
                    watchSlidesProgress={true}
                    freeMode={true}
                    grabCursor={true}
                    slidesPerView={"auto"}
                    className="lg:!ml-10 mb:!ml-0 lg:w-[535px]"
                  >
                    {testSlider.map((item) => (
                      <SwiperSlide className="mb:!w-[65px] lg:!w-[89px]">
                        <ImageItem
                          srcImg={item.imgSrc}
                          style="mb:w-[54px] mb:h-[54px] rounded-lg lg:w-[79px] lg:h-[79px] lg:ml-2 "
                        ></ImageItem>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </section>
    </div>
  );
};

export default BannerOfProducts;
