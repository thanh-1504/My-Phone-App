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
const SectionWatch = () => {
  const dispatch = useDispatch();
  const { dataWatch } = useSelector((state) => state.watch);
  const { dataMainPage } = dataWatch;
  const data = dataMainPage[3].sectionWatch;
  useEffect(() => {
    dispatch(handleGetData());
  }, [dispatch]);
  const width = window.innerWidth;
  return (
    <section className="Watch">
      <Brand nameBrand="Watch"></Brand>
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
                <ProductsItem srcImg="https://www.bihouse.vn/img_data/images/051308609480-snapedit_1694686913499.png"></ProductsItem>
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
            {test.map((slide) => (
              <SwiperSlide
                key={slide.imgSrc}
                className="!w-[252px] lg:mr-[30px]"
              >
                <ProductsItem srcImg="https://www.bihouse.vn/img_data/images/051308609480-snapedit_1694686913499.png"></ProductsItem>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </LayoutProduct>
      <SeeAllProduct nameBrand="Watch">Xem tất cả Watch</SeeAllProduct>
    </section>
  );
};

export default SectionWatch;
