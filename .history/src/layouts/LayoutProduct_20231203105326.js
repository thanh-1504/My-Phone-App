import React from "react";

const LayoutProduct = ({ children, style = "" }) => {
  return <div className={`flex mb:pl-[0.65rem] lg:pl-0 ${style}`}>{children}</div>;
};

export default LayoutProduct;
