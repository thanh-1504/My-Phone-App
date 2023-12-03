import React, { useEffect } from "react";
import BrandNav from "./BrandNav";
import BannerNav from "./BannerNav";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleGetDataBySlug } from "../reux-thunk/Slice/handler";
import { getNameBrand } from "../reux-thunk/Slice/navSlice";

const HeaderProductNav = ({ slug = "" }) => {
  const { data } = useSelector((state) => state.nav);
  const dispatch = useDispatch();
  const dataHeader = data.filter((item) => item.brand === slug);
  const { nameBrand } = useSelector((state) => state.nav);
  console.log(nameBrand);
  useEffect(() => {
    dispatch(getNameBrand(dataHeader));
  }, [dispatch]);
  return (
    <>
      <BrandNav nameBrand={dataHeader.brand}></BrandNav>
      <BannerNav></BannerNav>
    </>
  );
};

export default HeaderProductNav;
