/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import BrandNav from "../../layouts/layoutNav/BrandNav";
import BannerNav from "../../layouts/layoutNav/BannerNav";
const HeaderProductNav = ({ data = [], slug = "", imgSrcBanner }) => {
  const [imgBanner] = imgSrcBanner;
  return (
    <>
      <BrandNav nameBrand={data[0]?.typeProduct}></BrandNav>
      <BannerNav srcImg={imgBanner?.imgBanner} slug={slug}></BannerNav>
    </>
  );
};

export default HeaderProductNav;
