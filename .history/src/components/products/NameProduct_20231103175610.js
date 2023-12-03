import React from "react";

const NameProduct = ({ children = "", style = "" }) => {
  return <p className={`font-bold text-white ${style}`}>{name}</p>;
};

export default NameProduct;
