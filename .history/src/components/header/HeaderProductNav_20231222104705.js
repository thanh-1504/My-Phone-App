/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import BrandNav from "../../layouts/layoutNav/BrandNav";


const HeaderProductNav = ({ data = [] }) => {
  
  return (
    <>
      <BrandNav nameBrand={data[0]?.typeProduct}></BrandNav>
      {/* <BannerNav srcImg={imgSrcBanner} slug={slug}></BannerNav> */}
    </>
  );
};

export default HeaderProductNav;
