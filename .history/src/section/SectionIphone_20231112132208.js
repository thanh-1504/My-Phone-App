import React from "react";
import Brand from "../components/Brand";
import LayoutProduct from "../layouts/LayoutProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import ProductsItem from "../components/ProductsItem";
import SeeAllProduct from "../common/SeeAllProduct";
import { v4 } from "uuid";
import { addDataToFireBase } from "../reux-thunk/Slice/request";
const test = [{}, {}, {}, {}, {}];
const SectionIphone = () => {
  const width = window.innerWidth;
  return (
    <section className="iPhone">
      <Brand nameBrand="iPhone"></Brand>
      <LayoutProduct>
        {width === 414 ? (
          <Swiper
            slidesPerView={2}
            loop={true}
            className="swiper-wrapper-product "
            momentum={true}
            speed={800}
            easing="linear"
            modules={[Autoplay]}
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
            {test.map(() => (
              <SwiperSlide key={v4()} className="w-[186px]">
                <ProductsItem srcImg="https://www.bihouse.vn/img_data/images/587378764910-iPhone-14-Pro-series-2-650x650-1.png"></ProductsItem>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Swiper
            slidesPerView={4}
            loop={true}
            className="swiper-wrapper-product "
            grabCursor={true}
            momentum={true}
            speed={800}
            easing="linear"
            modules={[Autoplay]}
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
            {test.map((slide) => (
              <SwiperSlide
                key={slide.imgSrc}
                className="!w-[252px] lg:mr-[30px]"
              >
                <ProductsItem srcImg="https://www.bihouse.vn/img_data/images/587378764910-iPhone-14-Pro-series-2-650x650-1.png"></ProductsItem>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </LayoutProduct>
      <SeeAllProduct nameBrand="iPhone">Xem tất cả iPhone</SeeAllProduct>
    </section>
  );
};

export default SectionIphone;
