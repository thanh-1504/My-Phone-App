import React from "react";
import NameProduct from "./NameProduct";
import PriceProduct from "./PriceProduct";

const OptionProduct = ({ pushRef, name = "", price = "" }) => {
  return (
    <div
      ref={pushRef}
      className={`mb:w-[381px] mb:h-[84px] border 
       rounded-xl flex items-center justify-between px-5 mb:mt-5 option__type cursor-pointer select-none transition-all lg:mt-8`}
    >
    
      <NameProduct>iPhone 14 Pro Max</NameProduct>
      <p className="text-white ">Xam den - 512GB</p>
      <PriceProduct>{price}</PriceProduct>
    </div>
  );
};

export default OptionProduct;
