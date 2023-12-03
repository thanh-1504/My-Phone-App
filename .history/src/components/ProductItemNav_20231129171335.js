import React from "react";
import ImageItem from "./ImageItem";
import { useNavigate } from "react-router-dom";

const ProductItemNav = ({ data, ...props }) => {
  const navigate = useNavigate();
  const { name, price, imgSrc, slug } = data;
  const modelProduct = data.name.split(" ").join("");
  console.log(data);
  return (
    <div
      className={`bg-[#191717] mb:w-[186px] mb:h-[300px] mt-10 rounded-xl lg:w-[252px] lg:h-[360px]  cursor-pointer lg:px-5 mb:px-2 `}
    >
      <div className="flex justify-center">
        <ImageItem
          onClick={() =>
            navigate(`/products/detail/${data.slug}/${modelProduct}/${data.id}`)
          }
          srcImg={imgSrc}
        ></ImageItem>
      </div>
      <div
        onClick={() =>
          navigate(`/products/detail/${data.slug}/${modelProduct}/${data.id}`)
        }
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

export default ProductItemNav;
