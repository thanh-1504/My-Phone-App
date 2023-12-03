import React from "react";
import { Link } from "react-router-dom";

const SeeAllProduct = ({ children }) => {
  return (
    <Link class="svg-wrapper text-center mb:mt-[120px] block">
      <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
        <rect class="shape" height="60" width="320" />
      </svg>
      <div class="text">{children}</div>
    </Link>
  );
};

export default SeeAllProduct;
