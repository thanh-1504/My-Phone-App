import React from "react";
import LogoApple from "../components/LogoApple";
import Header from "../components/Header";

const LayoutMainPage = () => {
  return (
    <div className="w-full bg-black">
      <Header></Header>
      <LogoApple></LogoApple>
    </div>
  );
};

export default LayoutMainPage;
