import React from "react";
import { toast } from "react-toastify";

const NameProduct = ({ children = "", style = "" }) => {
  const notify = () => toast.success("Wow so easy!");
  return (
    <p onClick={notify} className={`font-bold text-white ${style}`}>
      {children}
    </p>
  );
};

export default NameProduct;
