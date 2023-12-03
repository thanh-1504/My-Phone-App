import React from "react";
import { Link } from "react-router-dom";

const SeeAllProduct = ({ style, children }) => {
  return (
    <div className="text-center mb:mt-[80px]">
      <Link className={``} to={"/"}>
        <span className="text-white border-2 border-[#00575b] px-[2.4rem] py-[0.5rem] rounded-3xl">
          {children}
        </span>
      </Link>
    </div>
  );
};

export default SeeAllProduct;
