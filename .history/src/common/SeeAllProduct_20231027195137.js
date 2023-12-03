import React from "react";
import { Link } from "react-router-dom";

const SeeAllProduct = ({ children }) => {
  return (
    <Link className="svg-wrapper text-center mb:mt-[120px] block" to={"/"}>
      <div class="data-container">
        <span class="btn"> Me </span>
      </div>
    </Link>
  );
};

export default SeeAllProduct;
