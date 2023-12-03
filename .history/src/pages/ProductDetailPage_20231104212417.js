/* eslint-disable react/style-prop-object */
import WarrantyText from "../common/WarrantyText";
import SpecificationText from "../components/SpecificationText";
import SpecificationTable from "../components/SpecificationTable";
import React, { useEffect } from "react";
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

const ProductDetailPage = () => {
  return (
    <LayoutPage>
      <Header></Header>
      <div className="px-[15px]">
        <LayoutOfBanner style="mb:pt-[75px]">
          <BannerOfProducts></BannerOfProducts>
        </LayoutOfBanner>
        <section className="list-image">
          <Swiper grabCursor={true} slidesPerView={"auto"}>
            {new Array(12).fill(0).map((item) => (
              <SwiperSlide className="mb:!w-[65px]">
                <ImageItem
                  srcImg={
                    "https://www.bihouse.vn/img_data/images/6416c136340d0.jpeg"
                  }
                  style="mb:w-[54px] mb:h-[54px] rounded-lg"
                ></ImageItem>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        <Border style="mb:mt-4 mb:pt-5"></Border>
        <SpecificationText></SpecificationText>
        <SpecificationTable></SpecificationTable>
        <NameProduct style="text-center text-xl">iPhone 12 Pro</NameProduct>
        <OptionProduct></OptionProduct>
        <OptionProduct></OptionProduct>
        <OptionProduct></OptionProduct>
        <Border style="mb:mt-10 mb:pt-5"></Border>
        <WarrantyText></WarrantyText>
        <Border style="mb:mt-7 mb:pt-5"></Border>
        <div className="pb-10 text-center">
          <Button
            style="bg-[#ee0000] w-[250px] h-[46px] rounded-lg"
            text="Giao tận nơi hoặc nhận tại cửa hàng"
          >
            MUA NGAY
          </Button>
        </div>
      </div>
    </LayoutPage>
  );
};

export default ProductDetailPage;
