import React from "react";
import { toast } from "react-toastify";

const NameProduct = ({ children = "", style = "" }) => {
  return <p
  onClick={() => console.log}
  
   className={`font-bold text-white ${style}`}>{children}</p>;
};

export default NameProduct;
