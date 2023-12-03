import SeeAllProduct from "../common/SeeAllProduct";
import React, { useEffect } from "react";
import ProductsItem from "../components/ProductsItem";
import LayoutProduct from "../layouts/LayoutProduct";
import Brand from "../components/Brand";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { handleGetData } from "../reux-thunk/Slice/handler";
const test = [{}, {}, {}, {}, {}];
const SectionMac = () => {
  const width = window.innerWidth;
  const dispatch = useDispatch();
  const { dataMac } = useSelector((state) => state.mac);
  const { dataMainPage } = dataMac;
  const data = dataMainPage[2].sectionMac;
  useEffect(() => {
    dispatch(handleGetData());
  }, dispatch);
  if (!dataMac || !dataMainPage) return;
  return (
    <section className="Mac">
      <Brand nameBrand="Mac"></Brand>
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
            {test.map((slide) => (
              <SwiperSlide key={slide.imgSrc} className="w-[186px]">
                <ProductsItem srcImg="https://www.bihouse.vn/img_data/images/597535140193-macbook-pro-14-m1-max-2021-10-core-cpu-xam-650x650.png"></ProductsItem>
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
            {data.map((dataItem) => (
              <SwiperSlide
                // key={slide.imgSrc}
                
                className="!w-[252px] lg:mr-[30px]"
              >
                <ProductsItem srcImg="https://www.bihouse.vn/img_data/images/597535140193-macbook-pro-14-m1-max-2021-10-core-cpu-xam-650x650.png"></ProductsItem>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </LayoutProduct>
      <SeeAllProduct nameBrand="Mac">Xem tất cả Mac</SeeAllProduct>
    </section>
  );
};

export default SectionMac;
