import React, { useEffect, useState } from "react";
import BrandNav from "./BrandNav";
import BannerNav from "./BannerNav";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleGetDataBySlug } from "../reux-thunk/Slice/handler";
import { getNameBrand } from "../reux-thunk/Slice/navSlice";

const HeaderProductNav = ({ slug = "" }) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.nav);
  const { nameBrand } = useSelector((state) => state.nav);
  const [name, setName] = useState("");
  useEffect(() => {
    const dataHeader = data.filter((item) => item.brand === slug);
    dispatch(getNameBrand(dataHeader));
    setName(dataHeader[0].brand);
  }, [dispatch, slug, data]);
  return (
    <>
      <BrandNav nameBrand={name}></BrandNav>
      <BannerNav></BannerNav>
    </>
  );
};

export default HeaderProductNav;
