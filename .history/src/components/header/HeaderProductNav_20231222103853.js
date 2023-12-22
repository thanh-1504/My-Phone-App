/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import BrandNav from "../../layouts/layoutNav/BrandNav";
import BannerNav from "../../layouts/layoutNav/BannerNav";
import { useDispatch, useSelector } from "react-redux";
import { getImgBanner, getNameBrand } from "../../reux-thunk/Slice/navSlice";

const HeaderProductNav = ({ slug = "" }) => {
  const dispatch = useDispatch();
  const { data, nameBrand, imgSrcBanner } = useSelector((state) => state.nav);
  const dataHeader = data.filter((item) => item.brand === slug);
  useEffect(() => {
    dispatch(getNameBrand(dataHeader[0]?.brand));
    dispatch(getImgBanner(dataHeader[0]?.imgBanner));
  }, [dispatch, slug, data]);
  return (
    <>
      <BrandNav nameBrand={"dsadsa"}></BrandNav>
      <BannerNav srcImg={imgSrcBanner} slug={slug}></BannerNav>
    </>
  );
};

export default HeaderProductNav;
