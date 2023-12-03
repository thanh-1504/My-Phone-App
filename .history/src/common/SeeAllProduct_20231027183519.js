import React from "react";
import { Link } from "react-router-dom";

const SeeAllProduct = ({ style, children }) => {
  return (
    <div className="text-center mb:mt-[80px]">
      <Link className={``} to={"/"}>
        <span className="text-white border border-[#00575b] w-[208px] h-[36px]">
          {children}
        </span>
      </Link>
    </div>
  );
};

export default SeeAllProduct;
