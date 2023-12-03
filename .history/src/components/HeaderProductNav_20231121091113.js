import React from "react";
import BrandNav from "./BrandNav";
import BannerNav from "./BannerNav";

const HeaderProductNav = ({ className }) => {
  return (
    <div>
        <BrandNav></BrandNav>
        <BannerNav></BannerNav>
    </div>
  );
};

export default HeaderProductNav;
