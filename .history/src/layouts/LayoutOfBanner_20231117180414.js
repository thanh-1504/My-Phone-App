import React from "react";

const LayoutOfBanner = ({ children, style = "" }) => {
  return <div className={`mb:pt-9 lg:pt-[60px] ${style}`}>{children}</div>;
};

export default LayoutOfBanner;
