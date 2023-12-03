import React from "react";

const TextHeading = ({ children, style = "" }) => {
  return (
    <div>
      <h2>{children}</h2>
    </div>
  );
};

export default TextHeading;
