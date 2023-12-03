import React from "react";
import { Link } from "react-router-dom";

const SeeAllProduct = ({ className, children }) => {
  return (
    <div>
      <Link className={`${className}`}><span></span></Link>
    </div>
  );
};

export default SeeAllProduct;
