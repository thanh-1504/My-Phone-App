import React from "react";

const PriceProduct = ({ children, style = "" }) => {
  return <span className={`text-[] ${style}`}>{children}</span>;
};

export default PriceProduct;
