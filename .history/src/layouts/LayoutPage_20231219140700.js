import React from "react";
const LayoutPage = ({ children }) => {
  return (
    <div className="w-full h-full overflow-hidden bg-white">{children}</div>
  );
};

export default LayoutPage;
