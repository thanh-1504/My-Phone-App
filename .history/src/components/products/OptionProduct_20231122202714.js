import React, { useState } from "react";
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
        <input
          name="capicity"
          id="256GB"
          type="radio"
          className="hidden radio1"
        />
        <label
          htmlFor="256GB"
          className={`bg-[#2f3033] mb:p-2 rounded-md cursor-pointer border product--checked1 mb:mr-3 lg:mr-0  }`}
        >
          <span className="text-white">256 GB</span>
        </label>
        <input
          name="capicity"
          id="512GB"
          type="radio"
          className="hidden radio2"
        />
        <label
          htmlFor="512GB"
          className={`bg-[#2f3033] mb:p-2 rounded-md cursor-pointer border product--checked2 mb:mr-3 lg:mr-0  }`}
        >
          <span className="text-white">512 GB</span>
        </label>
        <input
          name="capicity"
          id="1TB"
          type="radio"
          className="hidden radio3"
        />
        <label
          htmlFor="1TB"
          className={`bg-[#2f3033] mb:p-2 rounded-md cursor-pointer border product--checked3 }`}
        >
          <span className="text-white">1 TB</span>
        </label>
      </div>
      <p className="text-white mb:mt-4">Màu sắc</p>
      <div>
        <input
          name="color"
          id="green"
          type="radio"
          className="hidden radioColor1"
        />
        <label
          htmlFor="green"
          className={`bg-[#2f3033] mb:p-2 rounded-md cursor-pointer border product--checked1 mb:mr-3 lg:mr-0  }`}
        ></label>
        <input
          name="capicity"
          id="256GB"
          type="radio"
          className="hidden radio1"
        />
        <label
          htmlFor="256GB"
          className={`bg-[#2f3033] mb:p-2 rounded-md cursor-pointer border product--checked1 mb:mr-3 lg:mr-0  }`}
        >
          <span className="text-white">256 GB</span>
        </label>
      </div>
    </div>
  );
};

export default OptionProduct;
