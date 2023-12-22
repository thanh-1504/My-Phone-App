import SeeAllProduct from "../common/SeeAllProduct";
import React, { useEffect } from "react";
import ProductsItem from "../components/productItem/ProductsItem";
import Brand from "../layouts/layoutNav/Brand";
import LayoutProduct from "../layouts/LayoutProduct";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { handleGetData } from "../reux-thunk/Slice/handler";
import { Autoplay } from "swiper/modules";
import { v4 } from "uuid";
const SectionIpad = () => {
  const dispatch = useDispatch();
  const { dataIpad } = useSelector((state) => state.iPad);
  const width = window.innerWidth;
  const data = dataIpad.slice(8, 14);
  useEffect(() => {
    dispatch(handleGetData());
  }, [dispatch]);
  if (!dataIpad) return;
  return (
    <section className="iPad md:px-9 lg:pr-0 sm:px-6 lg:px-0">
      <Brand className="mb-[60px]" nameBrand="iPad"></Brand>
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
      <SeeAllProduct nameBrand="iPad">Xem tất cả iPad</SeeAllProduct>
    </section>
  );
};

export default SectionIpad;
