import React, { useEffect } from "react";
import BrandNav from "./BrandNav";
import BannerNav from "./BannerNav";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleGetDataBySlug } from "../reux-thunk/Slice/handler";

const HeaderProductNav = ({ slug = "", data }) => {
  const dispatch = useDispatch();
  const dataPageNav = data.filter((item) => item.slug === slug);
  useEffect(() => {
    dispatch(handleGetDataBySlug(slug));
  }, [dispatch, slug]);
  if (!dataPageNav) return;
  return (
    <>
      <BrandNav></BrandNav>
      <BannerNav></BannerNav>
    </>
  );
};

export default HeaderProductNav;
