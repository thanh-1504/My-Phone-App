import React from "react";
import LogoApple from "../components/LogoApple";
import Header from "../components/Header";
import Banner from "../common/Banner";

const LayoutMainPage = () => {
  return (
    <div className="w-full h-screen bg-black ">
      <Header></Header>
      <div className="pt-10">
        <Banner></Banner>
      </div>
    </div>
  );
};

export default LayoutMainPage;
