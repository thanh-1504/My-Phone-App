import SeeAllProduct from "../common/SeeAllProduct";
import React, { useEffect } from "react";
import ProductsItem from "../components/ProductsItem";
import LayoutProduct from "../layouts/LayoutProduct";
import Brand from "../components/Brand";
import { v4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { handleGetData } from "../reux-thunk/Slice/handler";
import { Autoplay } from "swiper/modules";
const SectionIphone = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleGetData());
  }, [dispatch]);
  const { dataIp } = useSelector((state) => state.iPhone);
  const { dataMainPage } = dataIp;
  const width = window.innerWidth;
  if (!dataIp || !dataMainPage) return;
  const data = dataMainPage[0].sectionIphone;
  return (
    <section className="iPhone md:px-9 ">
      <Brand nameBrand="iPhone"></Brand>
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
            <SwiperSlide key={v4()} className="">
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
