import React, { useEffect } from "react";
import ImageItem from "./ImageItem";
import { useDispatch, useSelector } from "react-redux";
import { filterProduct } from "../reux-thunk/Slice/iPhoneSlice";

const ProductsItem = ({ srcImg = "", style = "", data }) => {
  const dispatch = useDispatch();
  const { dataIp, dataFilter } = useSelector((state) => state.iPhone);
  const { dataMainPage } = useSelector((state) => state.global);
  useEffect(() => {
    // dispatch(filterProduct(dataIp[0].series15.slice(0, 2)));
  }, [dispatch]);
  console.log(data);
  const {name,price,imgSrc} = data;
  return (
    <div
      className={`bg-[#191717] mb:w-[186px] mb:h-[300px] mt-10 rounded-xl lg:w-[252px] lg:h-[335px] ${style} cursor-pointer `}
    >
      <div className="flex justify-center">
        <ImageItem srcImg={`${srcImg}`}></ImageItem>
      </div>
      <div className="flex flex-col mt-5 text-center">
        <span className="mb-4 text-white">iPhone 15 Pro Max</span>
        <span className="text-white ">33.000.000đ</span>
      </div>
    </div>
  );
};

export default ProductsItem;
