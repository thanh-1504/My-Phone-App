import React from "react";

const Border = ({ style = "" }) => {
  return (
    <div className={`border border-t h-[2px] border-[#fff] ${style} pb-[100px]`}></div>
  );
};

export default Border;
