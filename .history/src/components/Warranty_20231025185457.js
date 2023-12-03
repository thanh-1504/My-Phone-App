import React from "react";
import WarrantyItem from "./WarrantyItem";
import { v4 } from "uuid";
const Warranty = () => {
  return (
    <div className="mb:grid mb:grid-cols-4 ">
      {new Array(4).fill(0).map((item) => (
        <WarrantyItem key={v4() }></WarrantyItem>
      ))}
    </div>
  );
};

export default Warranty;
