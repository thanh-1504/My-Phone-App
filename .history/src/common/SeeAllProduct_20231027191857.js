import React from "react";
import { Link } from "react-router-dom";

const SeeAllProduct = ({ children }) => {
  return (
    <Link className="svg-wrapper text-center mb:mt-[120px] block" to={"/"}>
      <svg height="60" width="320" className="mb:" xmlns="http://www.w3.org/2000/svg">
        <rect className="shape" height="60" width="320" />
      </svg>
      <div className="font-semibold text mb:text-xs">{children}</div>
    </Link>
  );
};

export default SeeAllProduct;
