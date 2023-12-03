import React, { useEffect } from "react";
import BrandNav from "./BrandNav";
import BannerNav from "./BannerNav";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleGetDataBySlug } from "../reux-thunk/Slice/handler";

const HeaderProductNav = ({ data }) => {
  console.log(data);
  const { brand, imgBanner } = data;
  console.log(data);
  //   const dispatch = useDispatch();
  //   const { data } = useSelector((state) => state.nav);
  //   const dataPageNav = data.filter((item) => item.slug === slug);
  //   useEffect(() => {
  //     dispatch(handleGetDataBySlug(slug));
  //   }, [dispatch, slug]);
  //   if (!dataPageNav) return;
  return (
    <>
      <BrandNav></BrandNav>
      <BannerNav></BannerNav>
    </>
  );
};

export default HeaderProductNav;
