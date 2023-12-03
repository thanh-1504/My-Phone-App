import React from "react";
import Header from "../components/Header";
import Banner from "../common/Banner";
import WarrantyPolicy from "../components/warranty/WarrantyPolicy";
import ProductsAvailable from "../components/products/ProductsAvailable";
const LayoutMainPage = ({ children }) => {
  return <div className="w-full h-full bg-black ">{children}</div>;
};

export default LayoutMainPage;
