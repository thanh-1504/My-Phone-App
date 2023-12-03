import React from "react";
import { Link } from "react-router-dom";

const SeeAllProduct = ({ children }) => {
  return (
    <div className="text-center mb:mt-[80px]">
      <Link className={``} to={"/"}>
        <div class="svg-wrapper">
          <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
            <rect class="shape" height="60" width="320" />
          </svg>
          <div class="text"></div>
        </div>
      </Link>
    </div>
  );
};

export default SeeAllProduct;
