import React from "react";

import "react-toastify/dist/ReactToastify.css";

const NameProduct = ({ children = "", style = "" }) => {
  return <p className={`font-bold text-white ${style}`}>{children}</p>;
};

export default NameProduct;
