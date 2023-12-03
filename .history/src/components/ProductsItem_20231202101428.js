import React from "react";
import ImageItem from "./ImageItem";
import { useNavigate } from "react-router-dom";
const ProductsItem = ({ style = "", data, ...props }) => {
  const navigate = useNavigate();
  if (!data) return;
  const { name, price, imgSrc } = data;
  const modelProduct = data.name.split(" ").join("");
  return (
    <div
      className={`bg-[#191717] mb:h-[300px] mt-10 rounded-xl lg:w-[252px] lg:h-[360px] ${style} cursor-pointer lg:px-5 mb:px-2 mb:pb-2 mb:mr-2 mr-10`}
    >
      <div className="flex justify-center">
        <ImageItem
          onClick={() =>
            navigate(
              `/products/detail/${
                data.typeProduct || data.slug
              }/${modelProduct}/${data.id}`
            )
          }
          srcImg={imgSrc}
          style="lg:hover:scale-125 ease-linear duration-300"
        ></ImageItem>
      </div>
      <div
        onClick={() =>
          navigate(
            `/products/detail/${
              data.typeProduct || data.slug
            }/${modelProduct}/${data.id}`
          )
        }
        className="text-center mb:py-2"
      >
        <h3
          className={`text-[16px] font-semibold name__product--hover lg:max-w-[252px] lg:!h-[45px] 
          }`}
        >
          {name}
        </h3>
        <span className="block font-semibold text-white lg:translate-y-[-14px] lg:mt-8 mb:mt-5 ">
          {price}
        </span>
      </div>
    </div>
  );
};

export default ProductsItem;
