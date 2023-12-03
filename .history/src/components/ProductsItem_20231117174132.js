import React from "react";
import ImageItem from "./ImageItem";
const ProductsItem = ({ style = "", data, ...props }) => {
  if (!data) return;
  const { name, price, imgSrc } = data;
  return (
    <div
      className={`bg-[#191717] mb:w-[186px] mb:h-[300px] mt-10 rounded-xl lg:w-[252px] lg:h-[335px] ${style} cursor-pointer `}
    >
      <div className="flex justify-center">
        <ImageItem srcImg={imgSrc}></ImageItem>
      </div>
      <div className=" text-center">
        <span
          className={`text-[17px] font-semibold name__product--hover  lg:max-w-[252px] lg:h-[50px] lg:mt-3
          }`}
        >
          {name}
        </span>
        <span className="block font-semibold text-white lg:translate-y-[-14px] mt-8 ">
          {price}
        </span>
      </div>
    </div>
  );
};

export default ProductsItem;
