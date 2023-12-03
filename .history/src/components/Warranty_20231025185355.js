import React from "react";
import WarrantyItem from "./WarrantyItem";

const Warranty = () => {
  return <div className="mb:grid mb:grid-cols-4 ">
  {new Array(4).fill(0)}
    <WarrantyItem></WarrantyItem>
  </div>;
};

export default Warranty;
