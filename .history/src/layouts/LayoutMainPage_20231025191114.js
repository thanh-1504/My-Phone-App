import React from "react";
import Header from "../components/Header";
import Banner from "../common/Banner";
import Warranty from "../components/Warranty";

const LayoutMainPage = () => {
  return (
    <div className="w-full h-screen bg-black ">
      <Header></Header>
      <div className="pt-9">
        <Banner></Banner>
      </div>
      <div className="w-full max-w-[]">
        <Warranty></Warranty>
      </div>
    </div>
  );
};

export default LayoutMainPage;
