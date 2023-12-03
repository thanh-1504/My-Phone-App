import React, { useEffect } from "react";
import BrandNav from "./BrandNav";
import BannerNav from "./BannerNav";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleGetDataBySlug } from "../reux-thunk/Slice/handler";

const HeaderProductNav = ({}) => {
  const { data } = useSelector((state) => state.nav);
  const dataPageNav = data.filter((item) => item.brand === slug);
  if (!dataPageNav) return;
  console.log(dataPageNav);
  return (
    <>
      <BrandNav></BrandNav>
      <BannerNav></BannerNav>
    </>
  );
};

export default HeaderProductNav;
