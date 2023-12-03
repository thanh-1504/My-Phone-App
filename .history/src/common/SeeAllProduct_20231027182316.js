import React from "react";
import { Link } from "react-router-dom";

const SeeAllProduct = ({ className, children }) => {
  return (
    <div className="text-center">
      <Link className={`${className}`}>
        <span className="text-white border border-[#00575b]">{children}</span>
      </Link>
    </div>
  );
};

export default SeeAllProduct;
