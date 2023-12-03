import React, { useEffect } from "react";
import Brand from "../components/Brand";
import LayoutProduct from "../layouts/LayoutProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import ProductsItem from "../components/ProductsItem";
import SeeAllProduct from "../common/SeeAllProduct";
import { v4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { handleGetData } from "../reux-thunk/Slice/handler";
const test = [{}, {}, {}, {}, {}];
const SectionIphone = () => {
  const dispatch = useDispatch();
  const width = window.innerWidth;
  const { dataIp } = useSelector((state) => state.iPhone);
  useEffect(() => {
    dispatch(handleGetData());
  }, [dispatch]);
  const { dataMainPage } = dataIp;
  if (!dataIp || !dataMainPage) return;
  const data = dataMainPage[0].sectionIphone;
  console.log(data);
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
            {data.map((dataItem) => (
              <SwiperSlide className="!w-[252px] lg:mr-[30px]">
                <ProductsItem data={dataItem}></ProductsItem>
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
