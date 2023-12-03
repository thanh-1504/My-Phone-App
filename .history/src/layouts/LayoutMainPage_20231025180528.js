import React from "react";
import LogoApple from "../components/LogoApple";
import Header from "../components/Header";

const LayoutMainPage = () => {
  return (
    <div className="w-full h-screen bg-black ">
      <Header></Header>
      <Banner></Banner>
    </div>
  );
};

export default LayoutMainPage;
