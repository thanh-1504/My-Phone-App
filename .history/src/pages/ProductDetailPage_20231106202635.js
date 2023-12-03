/* eslint-disable react/style-prop-object */
import WarrantyText from "../common/WarrantyText";
import SpecificationText from "../components/SpecificationText";
import SpecificationTable from "../components/SpecificationTable";
import React, { useEffect, useRef } from "react";
import OptionProduct from "../components/products/OptionProduct";
import NameProduct from "../components/products/NameProduct";
import LayoutPage from "../layouts/LayoutPage";
import LayoutOfBanner from "../layouts/LayoutOfBanner";
import ImageItem from "../components/ImageItem";
import Header from "../components/Header";
import Button from "../components/button/Button";
import Border from "../common/Border";
import BannerOfProducts from "../common/BannerOfProducts";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../components/Footer";

const ProductDetailPage = () => {
  const widthScreen = window.screen.width;
  const optionRef = useRef([]);
  const pushRef = (element) => optionRef.current.push(element);
  useEffect(() => {
    optionRef.current.forEach((item) =>
      item.addEventListener("click", (e) => {
        optionRef.current.forEach((e) =>
          e.classList.remove("option__type--active")
        );
        e.currentTarget.classList.add("option__type--active");
      })
    );
  }, []);
  return (
    <LayoutPage>
      <Header></Header>
      <div className="px-[15px]">
        <div className="flex items-center">
          {/* <LayoutOfBanner style="mb:pt-[75px]">
            <BannerOfProducts></BannerOfProducts>
          </LayoutOfBanner> */}
          {widthScreen >= 1280 && (
            <div className="flex items-center w-full">
              <div className={`w-[${widthScreen / 2}px]`}>
                <LayoutOfBanner style="mb:pt-[75px]">
                  <BannerOfProducts></BannerOfProducts>
                </LayoutOfBanner>
              </div>
              <div className={`w-[${widthScreen / 2}px]`}>
                <NameProduct style="text-center mb:text-xl lg:ml-[100px] lg:text-3xl ">
                  iPhone 12 Pro
                </NameProduct>
                <div className="lg:ml-[120px] lg:mt-8">
                  <OptionProduct pushRef={pushRef}></OptionProduct>
                  <OptionProduct pushRef={pushRef}></OptionProduct>
                  <OptionProduct pushRef={pushRef}></OptionProduct>
                </div>
                <Border style="mb:mt-4 mb:pt-5 lg:w-[450px] lg:ml-[95px] lg:mt-[50px]"></Border>
                <WarrantyText></WarrantyText>
              </div>
            </div>
          )}
        </div>
        <section className="list-image">
          <Swiper
            grabCursor={true}
            slidesPerView={"auto"}
            className="lg:!ml-10 mb:!ml-0 lg:w-[535px]"
          >
            {new Array(12).fill(0).map((item) => (
              <SwiperSlide className="mb:!w-[65px] lg:!w-[89px]">
                <ImageItem
                  srcImg={
                    "https://www.bihouse.vn/img_data/images/6416c136340d0.jpeg"
                  }
                  style="mb:w-[54px] mb:h-[54px] rounded-lg lg:w-[79px] lg:h-[79px] lg:ml-2"
                ></ImageItem>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        {widthScreen <= 414 && <Border style="mb:mt-4 mb:pt-5"></Border>}
        {/* <Border style="mb:mt-4 mb:pt-5"></Border> */}
        <SpecificationText></SpecificationText>
        <SpecificationTable></SpecificationTable>
        {widthScreen <= 414 && (
          <NameProduct style="text-center text-xl">iPhone 12 Pro</NameProduct>
        )}
        {/* <OptionProduct pushRef={pushRef}></OptionProduct>
        <OptionProduct pushRef={pushRef}></OptionProduct>
        <OptionProduct pushRef={pushRef}></OptionProduct> */}
        <Border style="mb:mt-[50px] mb:pt-5"></Border>
        <WarrantyText></WarrantyText>
        <Border style="mb:mt-7 mb:pt-5"></Border>
        <div className="pb-10 text-center mb:mt-6">
          <Button
            style="bg-[#ee0000] w-[250px] h-[46px] rounded-lg"
            text="Giao tận nơi hoặc nhận tại cửa hàng"
          >
            MUA NGAY
          </Button>
        </div>
      </div>
      <Footer></Footer>
    </LayoutPage>
  );
};

export default ProductDetailPage;
