import React from "react";
import { Link } from "react-router-dom";

const SeeAllProduct = ({ children }) => {
  return (
    <Link className="svg-wrapper text-center mb:mt-[120px] block" to={"/"}>
      <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
        <rect className="shape" height="60" width="320" />
      </svg>
      <div className="font-semibold text mb:text-xs mb:min-w-[247px] mb:top-[-2.25rem] lg:text-sm">
        {children}
      </div>
    </Link>
  );
};

export default SeeAllProduct;
