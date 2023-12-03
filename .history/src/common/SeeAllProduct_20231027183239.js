import React from "react";
import { Link } from "react-router-dom";

const SeeAllProduct = ({ style, children }) => {
  return (
    <div className="mt-6 text-center">
      <Link className={`${style}  `} to={"/"}>
        <span className="text-white border border-[#00575b]">{children}</span>
      </Link>
    </div>
  );
};

export default SeeAllProduct;
