import React from "react";
import ImageItem from "./ImageItem";
import { useNavigate } from "react-router-dom";
const ProductsItem = ({ style = "", data, ...props }) => {
  const navigate = useNavigate()
  if (!data) return;
  const { name, price, imgSrc } = data;
  console.log(data);
  return (
    <div
      className={`bg-[#191717] mb:w-[186px] mb:h-[300px] mt-10 rounded-xl lg:w-[252px] lg:h-[360px] ${style} cursor-pointer px-5 `}
    >
      <div className="flex justify-center">
        <ImageItem onClick={() => navigate(`/products/${data.name}/`)} srcImg={imgSrc}></ImageItem>
      </div>
      <div className="text-center">
        <span
          className={`text-[17px] font-semibold name__product--hover  lg:max-w-[252px] lg:h-[45px]
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
