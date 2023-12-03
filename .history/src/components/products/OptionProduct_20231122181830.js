import React from "react";
import NameProduct from "./NameProduct";
import PriceProduct from "./PriceProduct";

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
    <div className="mb:mt-4 lg:mt-0">
      <p className="text-[#5dd673] uppercase font-medium">[Hàng có sẵn]</p>
      <p className="text-[#a6b3bb]">
        33.000.000đ - <span className="text-[#ed1c23] font-bold">256GB</span>
      </p>
      <p className="text-[#e2861e] mb:mt-4 lg:mt-0 font-bold mb:mb-4 lg:mt-0">
        Titan tự nhiên
      </p>
      <p className="uppercase text-[#5dd673]">mở rộng đổi + 2 năm</p>
    </div>
  );
};

export default OptionProduct;
