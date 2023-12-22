/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import BrandNav from "../../layouts/layoutNav/BrandNav";
import BannerNav from "../../layouts/layoutNav/BannerNav";
import { useDispatch, useSelector } from "react-redux";
import { getImgBanner, getNameBrand } from "../../reux-thunk/Slice/navSlice";

const HeaderProductNav = ({ data = [] }) => {
  const dispatch = useDispatch();
  const { data, imgSrcBanner } = useSelector((state) => state.nav);
  const dataHeader = data.filter((item) => item.brand === slug);
  console.log(data);
  useEffect(() => {
    dispatch(getImgBanner(dataHeader[0]?.imgBanner));
  }, [dispatch, slug, data]);
  return (
    <>
      <BrandNav nameBrand={data[0]?.typeProduct}></BrandNav>
      <BannerNav srcImg={imgSrcBanner} slug={slug}></BannerNav>
    </>
  );
};

export default HeaderProductNav;
