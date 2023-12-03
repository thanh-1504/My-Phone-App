import React from "react";
import ImageItem from "./ImageItem";
import { useNavigate, useParams } from "react-router-dom";
const ProductsItem = ({ style = "", data, ...props }) => {
  const navigate = useNavigate();
  const {slug} = useParams()
  if (!data) return;
  const { name, price, imgSrc } = data;
  return (
    <div
      className={`bg-[#191717] mb:w-[186px] mb:h-[300px] mt-10 rounded-xl lg:w-[252px] lg:h-[360px] ${style} cursor-pointer lg:px-5 mb:px-2 `}
    >
      <div className="flex justify-center">
        <ImageItem
          onClick={() => navigate(`/products/${data.name}/${data.id}`)}
          srcImg={imgSrc}
        ></ImageItem>
      </div>
      <div
        onClick={() => navigate(`/products/${data.name}/${data.id}`)}
        className="text-center mb:mt-3"
      >
        <span
          className={`text-[17px] font-semibold name__product--hover lg:max-w-[252px] lg:!h-[45px]
          }`}
        >
          {name}
        </span>
        <span className="block font-semibold text-white lg:translate-y-[-14px] lg:mt-8 mb:mt-5 ">
          {price}
        </span>
      </div>
    </div>
  );
};

export default ProductsItem;
