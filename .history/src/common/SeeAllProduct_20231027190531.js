import React from "react";
import { Link } from "react-router-dom";

const SeeAllProduct = ({ children }) => {
  return (
    <div className=" mb:mt-[120px]">
      <div class="svg-wrapper">
        <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
          <rect class="shape" height="60" width="320" />
        </svg>
        <Link>
          <div class="text">{children}</div>
        </Link>
      </div>
    </div>
  );
};

export default SeeAllProduct;
