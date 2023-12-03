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
const SectionMac = () => {
  const dispatch = useDispatch();
  const { dataMac } = useSelector((state) => state.mac);
  const { dataMainPage } = dataMac;
  const width = window.innerWidth;
  useEffect(() => {
    dispatch(handleGetData());
  }, [dispatch]);
  if (!dataMac || !dataMainPage) return;
  const data = dataMainPage[2].sectionMac;
  return (
    <section className="Mac md:pr-2">
      <Brand nameBrand="Mac"></Brand>
      <LayoutProduct>
        <Swiper
          slidesPerView={`${width <= 820 ? 2 : 4}`}
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
            <SwiperSlide key={v4()} className="md:mr-0">
              <ProductsItem data={dataItem}></ProductsItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </LayoutProduct>
      <SeeAllProduct nameBrand="Mac">Xem tất cả Mac</SeeAllProduct>
    </section>
  );
};

export default SectionMac;
