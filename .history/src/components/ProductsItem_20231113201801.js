import React, { useEffect } from "react";
import ImageItem from "./ImageItem";
import { useDispatch, useSelector } from "react-redux";
import { filterProduct } from "../reux-thunk/Slice/iPhoneSlice";

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
        <span className="mb-4 text-white">{name}</span>
        <span className="text-white ">{price}</span>
      </div>
    </div>
  );
};

export default ProductsItem;
