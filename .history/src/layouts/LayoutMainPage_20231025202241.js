import React from "react";
import Header from "../components/Header";
import Banner from "../common/Banner";
import Warranty from "../components/Warranty";
import ItemProduct from "../components/ItemProduct";

const LayoutMainPage = () => {
  return (
    <div className="w-full h-full bg-black ">
      <Header></Header>
      <div className="mb:pt-9 lg:pt-0">
        <Banner></Banner>
      </div>
      <div className="w-full mb:px-4 mb:py-5 lg:px-[10px] ">
        <div className="mb:grid mb:grid-cols-2 mb:gap-y-6 lg:flex lg:mt-10 bg-[#0f0f0f] lg:justify-evenly">
          <ItemProduct
            srcImg="https://www.bihouse.vn/img_data/images/253309473791-1icon.png"
            title="1 ĐỔI 1 KHÔNG THÊM PHÍ KHÔNG HÓA ĐƠN"
            imgClassName="mb:w-[113px] mb:relative mb:left-8 lg:left-6 lg:h-[69px] lg:w-[108px] "
            titleClassName="mb:mt-1 mb:h-[34px] text-xs font-semibold mb:text-center lg:mt-3"
          ></ItemProduct>
          <ItemProduct
            srcImg="https://www.bihouse.vn/img_data/images/573360051574-2icon.png"
            title="ĐÀO TẠO BỞI APPLE MỞ RỘNG đổi thêm 2 NĂM"
            imgClassName="mb:w-[113px] mb:relative mb:left-8 lg:left-10 lg:h-[67px] lg:w-[75px] "
            titleClassName="mb:mt-1 mb:h-[34px] text-xs font-semibold mb:text-center lg:mt-3"
          ></ItemProduct>
          <ItemProduct
            srcImg="https://www.bihouse.vn/img_data/images/549294739404-3icon.png"
            title="LỖI là ĐỔI - KHÔNG SỮA"
            imgClassName="mb:w-[113px] mb:relative mb:left-8 lg:left-1 lg:h-[76px] lg:w-[90px]"
            titleClassName="mb:mt-1 mb:h-[34px] text-xs font-semibold mb:text-center lg:mt-3"
          ></ItemProduct>
          <ItemProduct
            srcImg="https://www.bihouse.vn/img_data/images/755164095562-4icon.png"
            title="QUÀ TẶNG CHẤT SHIP TẬN NƠI"
            imgClassName="mb:w-[113px] mb:relative mb:left-8 lg:left-6 lg:h-[67px] lg:w-[66px]"
            titleClassName="mb:mt-1 mb:h-[34px] text-xs font-semibold mb:text-center lg:mt-3"
          ></ItemProduct>
        </div>
      </div>
    </div>
  );
};

export default LayoutMainPage;
