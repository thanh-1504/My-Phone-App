import React from "react";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const NameProduct = ({ children = "", style = "" }) => {
  const notify = () => toast.success("Wow so easy!");
  return (
    <p onClick={notify} className={`font-bold text-white ${style}`}>
      {children}
    </p>
  );
};

export default NameProduct;
