import React from "react";

const Border = ({ style = "" }) => {
  return <div className={` border-t h-[2px] border-[#fff] ${style} `}></div>;
};

export default Border;
