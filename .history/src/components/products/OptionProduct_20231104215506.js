import React, { useEffect, useRef } from "react";
import NameProduct from "./NameProduct";
import PriceProduct from "./PriceProduct";

const OptionProduct = ({ pushElement }) => {
  const optionItem = useRef([]);
  const pushRef = (element) => optionItem.current.push(element);

  useEffect(() => {
    optionItem.forEach((item) =>
      item.addEventListener("click", (e) => {
        optionItem.forEach((e) => e.classList.remove("option__type--active"));
        e.currentTarget.classList.add("option__type--active");
      })
    );
  });
  return (
    <div
      ref={pushElement}
      className={`mb:w-[381px] mb:h-[84px] border 
       rounded-xl flex items-center justify-between px-5 mb:mt-5 option__type cursor-pointer select-none transition-all`}
    >
      <NameProduct>iPhone 12 Pro - Green</NameProduct>
      <PriceProduct>Từ 30.000.000đ</PriceProduct>
    </div>
  );
};

export default OptionProduct;
