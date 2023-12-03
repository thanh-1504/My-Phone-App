import React from "react";
import ImageItem from "./ImageItem";

const ProductsItem = ({ style = "", data }) => {
  if (!data) return;
  const { name, price, imgSrc } = data;
  return (
    <div
      className={`bg-[#191717] mb:w-[186px] mb:h-[300px] mt-10 rounded-xl lg:w-[252px] lg:h-[335px] ${style} cursor-pointer `}
    >
      <div className="flex justify-center">
        <ImageItem srcImg={imgSrc}></ImageItem>
      </div>
      <div className="flex flex-col mt-5 text-center">
        <span className="mb-4 text-[17px] font-semibold name__product--hover ">
          {name}
        </span>
        <span className="font-semibold text-white">{price}</span>
      </div>
    </div>
  );
};

export default ProductsItem;
