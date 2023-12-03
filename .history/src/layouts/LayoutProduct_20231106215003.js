import React from "react";

const LayoutProduct = ({ children, style = "" }) => {
  return <div className="flex mb:pl-[0.75rem] lg:pl-0">{children}</div>;
};

export default LayoutProduct;
