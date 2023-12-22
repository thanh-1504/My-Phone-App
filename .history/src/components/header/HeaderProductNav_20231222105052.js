/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import BrandNav from "../../layouts/layoutNav/BrandNav";
import BannerNav from "../../layouts/layoutNav/BannerNav";
const HeaderProductNav = ({ data = [], slug = "", imgBanner }) => {
  console.log(imgBanner);
  const { imgBanner } = imgBanner;
  return (
    <>
      <BrandNav nameBrand={data[0]?.typeProduct}></BrandNav>
      <BannerNav srcImg={imgSrcBanner} slug={slug}></BannerNav>
    </>
  );
};

export default HeaderProductNav;
