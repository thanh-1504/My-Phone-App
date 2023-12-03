/* eslint-disable react/style-prop-object */
import React, { useEffect } from "react";
import LayoutPage from "../layouts/LayoutPage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilterProduct from "../components/FilterProduct";
import { v4 } from "uuid";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  handleGetAllDataNav,
  handleGetDataBySlug,
} from "../reux-thunk/Slice/handler";
import HeaderProductNav from "../components/HeaderProductNav";
import ProductsItem from "../components/ProductsItem";
const ProductsPage = () => {
  const dispatch = useDispatch();
  const { typeProduct } = useParams();
  const { data, allData } = useSelector((state) => state.nav);
  const dataPageNav = data.filter((item) => item.slug === typeProduct);
  useEffect(() => {
    dispatch(handleGetDataBySlug(typeProduct));
    dispatch(handleGetAllDataNav());
  }, [dispatch, typeProduct]);
  if (!dataPageNav) return;
  return (
    <LayoutPage>
      <Header></Header>
      <div className="pt-[80px] lg:px-[80px] mb:px-3">
        <HeaderProductNav slug={typeProduct}></HeaderProductNav>
      </div>
      <div className="mb:px-[15px] lg:px-5">
        <div className="mb-8">
          <FilterProduct
            slug={typeProduct}
            data={allData[0]?.filterBrandName}
            total={dataPageNav.length || 0}
          ></FilterProduct>
          <div className="mb:grid mb:grid-cols-2 mb:gap-x-2 lg:max-w-[1200px] lg:grid-cols-4 gap-x-0 lg:pl-[45px] lg:gap-y-3 lg:pb-10">
            {dataPageNav.map((dataItem) => (
              <ProductsItem key={v4()} data={dataItem}></ProductsItem>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </LayoutPage>
  );
};

export default ProductsPage;
