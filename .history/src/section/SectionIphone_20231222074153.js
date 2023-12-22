import SeeAllProduct from "../common/SeeAllProduct";
import React, { useEffect } from "react";
import { v4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { handleGetData } from "../reux-thunk/Slice/handler";
import { Autoplay } from "swiper/modules";
import Brand from "../layouts/layoutNav/Brand";
import LayoutProduct from "../layouts/LayoutProduct";
import ProductsItem from "../components/productItem/ProductsItem";
const SectionIphone = () => {
  const dispatch = useDispatch();
  const { dataIp } = useSelector((state) => state.iPhone);
  useEffect(() => {
    dispatch(handleGetData());
    dispatch(handleGetDataMainPage());
  }, [dispatch]);
  const data = dataIp.slice(0, 8);
  const width = window.innerWidth;
  if (!dataIp) return;
  return (
    <section className="iPhone md:px-9 lg:pr-0 sm:px-6 lg:px-0">
      <Brand className="mb-[60px]" nameBrand="iPhone"></Brand>
      <LayoutProduct>
        <Swiper
          slidesPerView={`${width <= 820 ? 2 : 4}`}
          loop={true}
          className="swiper-wrapper-product"
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
            <SwiperSlide key={v4()} className="!flex !justify-center ">
              <ProductsItem data={dataItem}></ProductsItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </LayoutProduct>
      <SeeAllProduct nameBrand="iPhone">Xem tất cả iPhone</SeeAllProduct>
    </section>
  );
};

export default SectionIphone;
