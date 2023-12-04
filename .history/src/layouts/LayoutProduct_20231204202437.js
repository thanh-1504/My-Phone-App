import React from "react";
// mb:pl-[0.55rem]
const LayoutProduct = ({ children, style = "" }) => {
  return <div className={`flex  lg:pl-0 ${style}`}>{children}</div>;
};

export default LayoutProduct;
