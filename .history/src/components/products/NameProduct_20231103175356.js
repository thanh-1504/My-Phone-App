import React from "react";

const NameProduct = ({ name = "", style = "" }) => {
  return <p className={`font-bold text-white ${style}`}>{name}</p>;
};

export default NameProduct;
