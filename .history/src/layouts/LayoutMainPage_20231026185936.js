import React from "react";
import Header from "../components/Header";
import Banner from "../common/Banner";
import WarrantyPolicy from "../components/warranty/WarrantyPolicy";
import ProductsAvailable from "../components/products/ProductsAvailable";
const LayoutMainPage = () => {
  return (
    <div className="w-full h-full bg-black ">
      <Header></Header>
      <div className="relative z-50 mb:pt-9 lg:pt-0">
      </div>
        <Banner></Banner>
      <div className="w-full mb:px-4 mb:py-5 lg:px-[10px] ">
        <WarrantyPolicy></WarrantyPolicy>
        <ProductsAvailable></ProductsAvailable>
      </div>
    </div>
  );
};

export default LayoutMainPage;
