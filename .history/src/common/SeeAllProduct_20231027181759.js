import React from "react";
import { Link } from "react-router-dom";

const SeeAllProduct = ({ className, children }) => {
  return (
    <div>
      <Link className={`${className}`}>
        <span>{children}</span>
      </Link>
    </div>
  );
};

export default SeeAllProduct;
