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
      <p className="text-white mb:mb-4">Phiên bản</p>
      <div>
        <label
          htmlFor="256GB"
          className="bg-[#2f3033] mb:p-2 rounded-md hover:border hover:border-green-400"
        >
          <span className="text-white">256 GB</span>
        </label>
        {/* <input name="capicity" id="256GB" type="radio" />
        <input name="capicity" type="radio" />
        <input name="capicity" type="radio" /> */}
      </div>
    </div>
  );
};

export default OptionProduct;
