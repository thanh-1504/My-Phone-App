import React from "react";

const PriceProduct = ({ children, style = "" }) => {
  return <span className={`${style}`}>{children}</span>;
};

export default PriceProduct;
