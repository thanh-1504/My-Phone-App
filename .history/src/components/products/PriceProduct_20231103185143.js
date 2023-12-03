import React from "react";

const PriceProduct = ({ children, style = "" }) => {
  return <span className={`text-[#c6c3c3] ${style}`}>{children}</span>;
};

export default PriceProduct;
