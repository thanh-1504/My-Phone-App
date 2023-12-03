import React from "react";
import { Link } from "react-router-dom";

const SeeAllProduct = ({ className, children }) => {
  return (
    <div>
      <Link className={`${className}`}></Link>
    </div>
  );
};

export default SeeAllProduct;
