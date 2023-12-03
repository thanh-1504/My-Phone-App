import React, { useEffect } from "react";
import BrandNav from "./BrandNav";
import BannerNav from "./BannerNav";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleGetDataBySlug } from "../reux-thunk/Slice/handler";

const HeaderProductNav = ({ slug = "" }) => {
  const { data } = useSelector((state) => state.nav);
  const dispatch = useDispatch();
  const dataHeader = data.filter((item) => item.brand === slug);
  useEffect()
  return (
    <>
      <BrandNav nameBrand={dataHeader.brand}></BrandNav>
      <BannerNav></BannerNav>
    </>
  );
};

export default HeaderProductNav;
