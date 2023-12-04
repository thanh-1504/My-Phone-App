/* eslint-disable react/style-prop-object */
import React from "react";
import { useNavigate } from "react-router-dom";
import ImageItem from "../items/ImageItem";
const ProductsItem = ({ style = "", data, ...props }) => {
  const navigate = useNavigate();
  if (!data) return;
  const { name, price, imgSrc } = data;
  const modelProduct = data.name.split(" ").join("");
  return (
    <div className="lg:w-[252px] md:w-[340px] sm:w-[334px] mb:px-3 mb:w-full">
      <div className="bg-[#3b1213] lg:h-[30px] rounded-t-2xl flex items-center justify-center ">
        <span className="text-sm font-medium text-white uppercase">
          Mở rộng đổi + 2 năm
        </span>
      </div>
      <div
        className={`bg-[#191717] mb:h-[300px] rounded-b-lg relative w-full lg:h-[360px] cursor-pointer lg:px-5 mb:px-2 mb:pb-2 mb:mr-2 mr-10 md:h-[400px] sm:h-[440px] ${style}`}
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
    </div>
  );
};

export default ProductsItem;
