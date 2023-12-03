import React from "react";

const NameProduct = ({ name = "" }) => {
  return <p className={`font-bold text-white">{name}</p>;
};

export default NameProduct;
