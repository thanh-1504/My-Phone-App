import React from "react";
import Header from "../components/Header";
import Banner from "../common/Banner";
import Warranty from "../components/Warranty";
import ItemProduct from "../components/ItemProduct";

const LayoutMainPage = () => {
  return (
    <div className="w-full h-screen bg-black ">
      <Header></Header>
      <div className="pt-9">
        <Banner></Banner>
      </div>
      <div className="w-full max-w-[384px] mb:py-">
        {/* <Warranty></Warranty> */}
        <ItemProduct></ItemProduct>
      </div>
    </div>
  );
};

export default LayoutMainPage;
