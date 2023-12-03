import React from "react";
import Header from "../components/Header";
import Banner from "../common/Banner";
import Warranty from "../components/Warranty";
import ItemProduct from "../components/ItemProduct";
import WarrantyPolicy from "../components/warranty/WarrantyPolicy";
import ListProduct from "../components/ListProduct";

const LayoutMainPage = () => {
  return (
    <div className="w-full h-full bg-black ">
      <Header></Header>
      <div className="relative z-50 mb:pt-9 lg:pt-0">
        <Banner></Banner>
      </div>
      <div className="w-full mb:px-4 mb:py-5 lg:px-[10px] ">
        <WarrantyPolicy></WarrantyPolicy>
      </div>
    </div>
  );
};

export default LayoutMainPage;
