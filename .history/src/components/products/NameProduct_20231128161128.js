import React from "react";
import { toast } from "react-toastify";

const NameProduct = ({ children = "", style = "" }) => {
  const notify = () => toast("Wow so easy!");
  console.log(toast());
  return (
    <p onClick={notify} className={`font-bold text-white ${style}`}>
      {children}
    </p>
  );
};

export default NameProduct;
