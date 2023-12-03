import SeeAllProduct from "../common/SeeAllProduct";
import React, { useEffect } from "react";
import ProductsItem from "../components/ProductsItem";
import LayoutProduct from "../layouts/LayoutProduct";
import Brand from "../components/Brand";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { handleGetData } from "../reux-thunk/Slice/handler";
import { v4 } from "uuid";
const SectionWatch = () => {
  const dispatch = useDispatch();
  const { dataWatch } = useSelector((state) => state.watch);
  const { dataMainPage } = dataWatch;
  const width = window.innerWidth;
  useEffect(() => {
    dispatch(handleGetData());
  }, [dispatch]);
  if (!dataMainPage || !dataWatch) return;
  const data = dataMainPage[4].sectionWatch;
  return (
    <section className="Watch">
      <Brand nameBrand="Watch"></Brand>
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
            <SwiperSlide
              key={v4()}
              className="md:!w-[340px] md:mr-3 lg:!w-auto"
            >
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
