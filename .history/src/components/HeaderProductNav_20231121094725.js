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
  const { nameBrand } = useSelector((state) => state.nav);
  useEffect(() => {
      const dataHeader = data.filter((item) => item.brand === slug);
    dispatch(getNameBrand(dataHeader));
  }, [dispatch]);
  console.log(nameBrand);
  return (
    <>
      <BrandNav nameBrand={dataHeader.brand}></BrandNav>
      <BannerNav></BannerNav>
    </>
  );
};

export default HeaderProductNav;
