import React from "react";
import NameProduct from "./NameProduct";
import PriceProduct from "./PriceProduct";
import ProductInfoOption from "./ProductInfoOption";

const OptionProduct = ({ pushRef, name = "", price = "" }) => {
  return (
    // <div
    //   className={`mb:w-[381px] mb:h-[84px] border
    //    rounded-xl flex items-center justify-between px-5 mb:mt-5 option__type cursor-pointer select-none transition-all lg:mt-8`}
    // >
    //   <div>
    //     <NameProduct>iPhone 14 Pro Max</NameProduct>
    //     <p className="text-white ">Xam den - 512GB</p>
    //   </div>
    //   <PriceProduct>30.000.000d</PriceProduct>
    // </div>
    <div className="">
      <ProductInfoOption></ProductInfoOption>
      <p className="text-white">Phiên bản</p>
      <div>
      <label htmlFor=""></label>
        <input name="capicity" type="radio" />
        <input name="capicity" type="radio" />
        <input name="capicity" type="radio" />
      </div>
    </div>
  );
};

export default OptionProduct;
