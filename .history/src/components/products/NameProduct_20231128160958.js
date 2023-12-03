import React from "react";
import { toast } from "react-toastify";

const NameProduct = ({ children = "", style = "" }) => {
  return (
    <p
      onClick={() => toast("Wow so easy!")}
      className={`font-bold text-white ${style}`}
    >
      {children}
    </p>
  );
};

export default NameProduct;
