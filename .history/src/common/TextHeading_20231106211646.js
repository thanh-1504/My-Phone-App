import React from "react";

const TextHeading = ({ children, style = "" }) => {
  return (
    <div className={`text-center ${style}`}>
      <h2 className="font-bold text-white">{children}</h2>
    </div>
  );
};

export default TextHeading;
