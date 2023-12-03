import React from "react";
import NameProduct from "./NameProduct";
import PriceProduct from "./PriceProduct";

const OptionProduct = ({ style = "" }) => {
  return (
    <div className="">
      <div>
        <NameProduct>iPhone 12 Pro</NameProduct>
        <PriceProduct>Từ 30.000.000đ</PriceProduct>
      </div>
    </div>
  );
};

export default OptionProduct;
