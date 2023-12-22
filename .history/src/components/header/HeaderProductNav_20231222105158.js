/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import BrandNav from "../../layouts/layoutNav/BrandNav";
import BannerNav from "../../layouts/layoutNav/BannerNav";
const HeaderProductNav = ({ data = [], slug = "", imgSrcBanner }) => {
  const { imgBanner } = imgSrcBanner;
  console.log(imgBanner);
  return (
    <>
      <BrandNav nameBrand={data[0]?.typeProduct}></BrandNav>
      <BannerNav srcImg={imgBanner} slug={slug}></BannerNav>
    </>
  );
};

export default HeaderProductNav;
