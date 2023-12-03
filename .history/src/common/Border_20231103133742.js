import React from "react";

const Border = ({ style = "" }) => {
  return <div className={`border h-[2px] border-[#fff] ${style} pb-5`}></div>;
};

export default Border;
