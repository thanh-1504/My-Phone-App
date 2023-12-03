import React from "react";
import LogoApple from "./LogoApple";
import ListProduct from "./ListProduct";
const Header = () => {
  const width = window.innerWidth;
  console.log(width);
  return (
    <div
      className={`w-full mb:h-[53px] lg:h-[70px] fixed z-50 bg-black ${
        width >= 320 && width <= 414 ? "test" : null
      } `}
    >
      <div className=" lg:flex lg:items-center lg:justify-between lg:h-full">
        <LogoApple></LogoApple>
        <ListProduct></ListProduct>
      </div>
    </div>
  );
};

export default Header;
