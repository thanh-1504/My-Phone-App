import React from "react";
import { Link } from "react-router-dom";

const SeeAllProduct = ({ children }) => {
  return (
    <div class="svg-wrapper text-center mb:mt-[120px]">
      <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
        <rect class="shape" height="60" width="320" />
      </svg>
      <Link>
        <div class="text">{children}</div>
      </Link>
    </div>
  );
};

export default SeeAllProduct;
