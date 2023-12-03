import React, { useEffect } from "react";
import LayoutPage from "../layouts/LayoutPage";
import Header from "../components/Header";
import HeaderProductNav from "../components/HeaderProductNav";
import FilterProduct from "../components/FilterProduct";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  handleGetAllDataNav,
  handleGetDataBySlug,
} from "../reux-thunk/Slice/handler";
import Footer from "../components/Footer";

const ProductsFilterPage = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const { data, allData } = useSelector((state) => state.nav);
  // console.log(allData[0]?.filterBrandName);
  const dataPageNav = data.filter((item) => item.slug === slug);
  useEffect(() => {
    dispatch(handleGetDataBySlug(slug));
    dispatch(handleGetAllDataNav());
  }, [dispatch, slug]);
  if (!dataPageNav) return;
  return (
    <LayoutPage>
      <Header></Header>
      <div className="pt-[80px] lg:px-[80px] mb:px-3">
        <HeaderProductNav slug={slug}></HeaderProductNav>
      </div>
      <div className="mb:px-[15px] lg:px-5">
        <div className="mb-8">
          <FilterProduct
            slug={slug}
            data={allData[0]?.filterBrandName}
          ></FilterProduct>
          <div className="mb:grid mb:grid-cols-2 mb:gap-x-2 lg:max-w-[1200px] lg:grid-cols-4 gap-x-0 lg:pl-[45px] lg:gap-y-3 lg:pb-10">
            {/* {dataPageNav.map((dataItem) => (
                <ProductItemNav key={v4()} data={dataItem}></ProductItemNav>
              ))} */}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </LayoutPage>
  );
};

export default ProductsFilterPage;
