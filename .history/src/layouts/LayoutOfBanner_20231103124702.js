import React from "react";

const LayoutOfBanner = ({ children, style = "" }) => {
  return <div className={`mb:pt-9 lg:pt-0 ${style}`}>{children}</div>;
};

export default LayoutOfBanner;
