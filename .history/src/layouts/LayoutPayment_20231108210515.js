import React from "react";

const LayoutPayment = ({ style = "", children }) => {
  return <div className={`px-4 py-3 bg-[#ebf4f8] ${style}`}>{children}</div>;
};

export default LayoutPayment;
