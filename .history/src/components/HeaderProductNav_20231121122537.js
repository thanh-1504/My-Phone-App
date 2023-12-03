import React, { useEffect, useState } from "react";
import BrandNav from "./BrandNav";
import BannerNav from "./BannerNav";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleGetDataBySlug } from "../reux-thunk/Slice/handler";
import { getNameBrand } from "../reux-thunk/Slice/navSlice";

const HeaderProductNav = ({ slug = "" }) => {
  const dispatch = useDispatch();
  const { data, nameBrand } = useSelector((state) => state.nav);
  const dataHeader = data.filter((item) => item.brand === slug);
  useEffect(() => {
    dispatch(getNameBrand(dataHeader[0]?.brand));
  }, [dispatch, slug, data]);
  return (
    <>
      <BrandNav nameBrand={nameBrand}></BrandNav>
      <BannerNav></BannerNav>
    </>
  );
};

export default HeaderProductNav;
