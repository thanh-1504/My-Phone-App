import React from "react";
import BrandNav from "./BrandNav";
import BannerNav from "./BannerNav";

const HeaderProductNav = ({ className }) => {
  return (
    <>
      <BrandNav></BrandNav>
      <BannerNav></BannerNav>
    </>
  );
};

export default HeaderProductNav;
