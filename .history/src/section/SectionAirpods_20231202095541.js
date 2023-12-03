import React, { useEffect } from "react";
import SeeAllProduct from "../common/SeeAllProduct";
import ProductsItem from "../components/ProductsItem";
import LayoutProduct from "../layouts/LayoutProduct";
import Brand from "../components/Brand";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { handleGetData } from "../reux-thunk/Slice/handler";
import { v4 } from "uuid";
const SectionAirpods = () => {
  const dispatch = useDispatch();
  const { dataAirpod } = useSelector((state) => state.airpod);
  const { dataMainPage } = dataAirpod;
  const width = window.innerWidth;
  useEffect(() => {
    dispatch(handleGetData());
  }, [dispatch]);
  if (!dataAirpod || !dataMainPage) return;
  const data = dataMainPage[3].sectionAirpod;
  return (
    <section className="AirPods">
      <Brand nameBrand="AirPods"></Brand>
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
            <SwiperSlide key={v4()} className="w-auto">
              <ProductsItem data={dataItem}></ProductsItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </LayoutProduct>
      <SeeAllProduct nameBrand="AirPods">Xem tất cả AirPods</SeeAllProduct>
    </section>
  );
};

export default SectionAirpods;
