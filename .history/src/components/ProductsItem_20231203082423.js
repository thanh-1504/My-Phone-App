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
      className={`bg-[#191717] mb:h-[300px] rounded-b-lg relative mt-10 lg:w-[252px] lg:h-[360px] cursor-pointer lg:px-5 mb:px-2 mb:pb-2 mb:mr-2 mr-10 md:w-[340px] md:h-[400px] sm:w-[334px] sm:h-[480px] ${style}  `}
    >
      <div className="absolute bg-[#3b1213] bg-red- lg:h-[30px] lg:-top-7 lg:w-full lg:right-0 lg:rounded-t-2xl flex items-center justify-center md:w-full">
        <span className="text-sm font-medium text-white uppercase">
          Mở rộng đổi + 2 năm
        </span>
      </div>
      <>
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
      </>
    </div>
  );
};

export default ProductsItem;
