import React from "react";
import { Link } from "react-router-dom";

const SeeAllProduct = ({ style, children }) => {
  return (
    <div className="text-center mb:mt-[80px]">
      <Link className={``} to={"/"}>
        <div className="svg-wrapper">
          <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
            <rect className="shape" height="60" width="320" />
            <div className="text">ZACH SAUCIER</div>
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default SeeAllProduct;
