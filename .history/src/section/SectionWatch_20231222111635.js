import SeeAllProduct from "../common/SeeAllProduct";
import React, { useEffect } from "react";
import ProductsItem from "../components/productItem/ProductsItem";
import Brand from "../layouts/layoutNav/Brand";
import LayoutProduct from "../layouts/LayoutProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { handleGetData } from "../reux-thunk/Slice/handler";
import { v4 } from "uuid";
const SectionWatch = () => {
  const dispatch = useDispatch();
  const { dataWatch } = useSelector((state) => state.watch);
  const data = dataWatch.slice(25, 33);
  const width = window.innerWidth;
  useEffect(() => {
    dispatch(handleGetData({type = "",}));
  }, [dispatch]);
  if (!dataWatch) return;
  return (
    <section className="Watch md:px-9 lg:pr-0 sm:px-6 lg:px-0">
      <Brand className="mb-[60px]" nameBrand="Watch"></Brand>
      <LayoutProduct>
        <Swiper
          slidesPerView={`${width <= 820 ? 2 : 4}`}
          loop={true}
          className="swiper-wrapper-product "
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
            <SwiperSlide key={v4()} className="!flex !justify-center">
              <ProductsItem data={dataItem}></ProductsItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </LayoutProduct>
      <SeeAllProduct nameBrand="Watch">Xem tất cả Watch</SeeAllProduct>
    </section>
  );
};

export default SectionWatch;
