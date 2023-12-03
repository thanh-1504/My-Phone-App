import React from "react";
import ImageItem from "./ImageItem";

const ProductsItem = ({ style = "", data, ...props }) => {
  if (!data) return;
  const { name, price, imgSrc } = data;
  const { styleBrand } = props;
  return (
    <div
      className={`bg-[#191717] mb:w-[186px] mb:h-[300px] mt-10 rounded-xl lg:w-[252px] lg:h-[335px] ${style} cursor-pointer `}
    >
      <div className="flex justify-center">
        <ImageItem srcImg={imgSrc}></ImageItem>
      </div>
      <div className="flex flex-col pb-10 text-center">
        <span
          className={`text-[17px] font-semibold name__product--hover lg:px-10 lg:max-w-[252px] lg:h-[50px] 
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
