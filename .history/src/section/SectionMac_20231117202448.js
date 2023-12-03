import SeeAllProduct from "../common/SeeAllProduct";
import React, { useEffect } from "react";
import ProductsItem from "../components/ProductsItem";
import LayoutProduct from "../layouts/LayoutProduct";
import Brand from "../components/Brand";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { handleGetData } from "../reux-thunk/Slice/handler";
import { Autoplay } from "swiper/modules";
import { v4 } from "uuid";
const test = [{}, {}, {}, {}, {}];
const SectionMac = () => {
  const dispatch = useDispatch();
  const { dataMac } = useSelector((state) => state.mac);
  const { dataMainPage } = dataMac;
  const width = window.innerWidth;
  useEffect(() => {
    dispatch(handleGetData());
  }, dispatch);
  if (!dataMac || !dataMainPage) return;
  const data = dataMainPage[2].sectionMac;
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
            {data.map((dataItem) => (
              <SwiperSlide key={v4()} className="w-[186px]">
              
                <ProductsItem
                data={dataItem}
                 srcImg="https://www.bihouse.vn/img_data/images/597535140193-macbook-pro-14-m1-max-2021-10-core-cpu-xam-650x650.png"></ProductsItem>
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
              key={v4()}
                className="!w-[252px] lg:mr-[30px]"
              >
                <ProductsItem data={dataItem}></ProductsItem>
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
