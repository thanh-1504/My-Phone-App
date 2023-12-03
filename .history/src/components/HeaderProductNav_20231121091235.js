import React from "react";
import BrandNav from "./BrandNav";
import BannerNav from "./BannerNav";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderProductNav = ({ className }) => {
    const { slug } = useParams();
    const { data } = useSelector((state) => state.nav);
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
