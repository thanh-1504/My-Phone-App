import React from "react";

const LayoutProduct = ({ children, style = "" }) => {
  return <div className={`flex  lg:pl-0 ${style}`}>{children}</div>;
};

export default LayoutProduct;
