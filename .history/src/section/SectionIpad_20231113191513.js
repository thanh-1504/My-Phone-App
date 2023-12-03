import SeeAllProduct from "../common/SeeAllProduct";
import React, { useEffect } from "react";
import ProductsItem from "../components/ProductsItem";
import LayoutProduct from "../layouts/LayoutProduct";
import Brand from "../components/Brand";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { handleGetDataIpad } from "../reux-thunk/Slice/iPadSlice";
import { handleGetData } from "../reux-thunk/Slice/handler";
const test = [{}, {}, {}, {}, {}];
const SectionIpad = () => {
  const width = window.innerWidth;
  const dispatch = useDispatch();
  const { dataIpad } = useSelector((state) => state.iPad);
  const { dataMainPage } = dataIpad;
  console.log(dataMainPage);
  useEffect(() => {
    dispatch(handleGetData());
  }, [dispatch]);
  if (!dataMainPage || !dataIpad) return;
  const data = dataMainPage[1].sectionIpad;
  return (
    <section className="iPad">
      <Brand nameBrand="iPad"></Brand>
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
                <ProductsItem srcImg="https://www.bihouse.vn/img_data/images/132657839873-iPad-Pro-M2-129-5G-grey-thumb-650x650-1.png"></ProductsItem>
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
            {dataIpad.map((dataItem) => (
              <SwiperSlide
                key={slide.imgSrc}
                className="!w-[252px] lg:mr-[30px]"
              >
                <ProductsItem
                  data={dataItem}
                  srcImg="https://www.bihouse.vn/img_data/images/132657839873-iPad-Pro-M2-129-5G-grey-thumb-650x650-1.png"
                ></ProductsItem>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </LayoutProduct>
      <SeeAllProduct nameBrand="iPad">Xem tất cả iPad</SeeAllProduct>
    </section>
  );
};

export default SectionIpad;
