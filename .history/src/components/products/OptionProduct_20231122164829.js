import React from "react";
import NameProduct from "./NameProduct";
import PriceProduct from "./PriceProduct";

const OptionProduct = ({ pushRef, data }) => {
  // if (!pushRef) return;
  console.log(pushRef);
  return (
    <div
      ref={pushRef}
      className={`mb:w-[381px] mb:h-[84px] border 
       rounded-xl flex items-center justify-between px-5 mb:mt-5 option__type cursor-pointer select-none transition-all lg:mt-8`}
    >
      <NameProduct>iPhone 12 Pro - Green</NameProduct>
      <PriceProduct>Từ 30.000.000đ</PriceProduct>
    </div>
  );
};

export default OptionProduct;
