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
      <div className="w-full mb:px-4 mb:py-5 lg:px-[100px] ">
        <div className="mb:grid mb:grid-cols-2 mb:gap-y-6 lg:grid-cols-4 lg:mt-10 ">
          <ItemProduct
            srcImg="https://www.bihouse.vn/img_data/images/253309473791-1icon.png"
            title="1 ĐỔI 1 KHÔNG THÊM PHÍ KHÔNG HÓA ĐƠN"
            imgClassName="mb:w-[113px] mb:relative mb:left-8"
            titleClassName="mb:mt-1 mb:h-[34px] text-xs font-semibold mb:text-center"
          ></ItemProduct>
          <ItemProduct
            srcImg="https://www.bihouse.vn/img_data/images/253309473791-1icon.png"
            title="1 ĐỔI 1 KHÔNG THÊM PHÍ KHÔNG HÓA ĐƠN"
            imgClassName="mb:w-[113px] mb:relative mb:left-8"
            titleClassName="mb:mt-1 mb:h-[34px] text-xs font-semibold mb:text-center"
          ></ItemProduct>
          <ItemProduct
            srcImg="https://www.bihouse.vn/img_data/images/253309473791-1icon.png"
            title="1 ĐỔI 1 KHÔNG THÊM PHÍ KHÔNG HÓA ĐƠN"
            imgClassName="mb:w-[113px] mb:relative mb:left-8"
            titleClassName="mb:mt-1 mb:h-[34px] text-xs font-semibold mb:text-center"
          ></ItemProduct>
          <ItemProduct
            srcImg="https://www.bihouse.vn/img_data/images/253309473791-1icon.png"
            title="1 ĐỔI 1 KHÔNG THÊM PHÍ KHÔNG HÓA ĐƠN"
            imgClassName="mb:w-[113px] mb:relative mb:left-8"
            titleClassName="mb:mt-1 mb:h-[34px] text-xs font-semibold mb:text-center"
          ></ItemProduct>
        </div>
      </div>
    </div>
  );
};

export default LayoutMainPage;
