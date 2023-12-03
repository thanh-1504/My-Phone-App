import React, { useState } from "react";
import NameProduct from "./NameProduct";
import PriceProduct from "./PriceProduct";

const OptionProduct = ({ style = "" }) => {
  const [changeBorderColore, setChangeBorderColor] = useState(false);
  return (
    <div
      className={`mb:w-[381px] mb:h-[84px] border ${
        changeBorderColore ? "border-[#4094ea]" : "border-white"
      } rounded-xl flex items-center justify-between px-5 mb:mt-5`}
      name="test"
      onClick={(e) => e.currentTarget.setAttribute("option--active")}
    >
      <NameProduct>iPhone 12 Pro - Green</NameProduct>
      <PriceProduct>Từ 30.000.000đ</PriceProduct>
    </div>
  );
};

export default OptionProduct;
