import React from "react";

const PriceProduct = ({ children, style = "" }) => {
  return <span className={`t${style}`}>{children}</span>;
};

export default PriceProduct;
