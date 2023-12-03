import React from "react";
import WarrantyItem from "./WarrantyItem";
import { v4 } from "uuid";
const Warranty = () => {
  return (
    <div className="mb:grid mb:grid-cols-4 ">
     <WarrantyItem></WarrantyItem>
    </div>
  );
};

export default Warranty;
