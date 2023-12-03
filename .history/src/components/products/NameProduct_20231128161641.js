import React from "react";

const NameProduct = ({ children = "", style = "" }) => {
  return <p className={`font-bold text-white ${style}`}>{children}</p>;
};

export default NameProduct;
