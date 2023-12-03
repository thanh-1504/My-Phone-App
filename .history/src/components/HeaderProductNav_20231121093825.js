import React, { useEffect } from "react";
import BrandNav from "./BrandNav";
import BannerNav from "./BannerNav";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleGetDataBySlug } from "../reux-thunk/Slice/handler";

const HeaderProductNav = ({ slug = "" }) => {
  const { data } = useSelector((state) => state.nav);
  const data = data.filter((item) => item.brand === slug);
  if (!data) return;
  console.log(dataPageNav);
  return (
    <>
      <BrandNav></BrandNav>
      <BannerNav></BannerNav>
    </>
  );
};

export default HeaderProductNav;
