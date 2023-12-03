/* eslint-disable react/style-prop-object */
import React, { useEffect } from "react";

import { v4 } from "uuid";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  handleGetAllDataNav,
  handleGetDataBySlug,
} from "../reux-thunk/Slice/handler";
import LayoutPage from "../layouts/LayoutPage";
import Header from "../components/header/Header";

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
      <div className="mb:px-[15px] lg:px-5 sm:px-10">
        <div className="mb-8 ">
          <FilterProduct
            slug={typeProduct}
            data={allData[0]?.filterBrandName}
            total={dataPageNav.length || 0}
          ></FilterProduct>
          <div className="mb:grid mb:grid-cols-2 lg:max-w-[1200px] lg:grid-cols-4 gap-x-0 lg:pl-[32px] lg:gap-y-[50px] lg:pb-10 lg:px-0 lg:mt-10 md:gap-y-10 md:mt-8 sm:gap-y-7 sm:gap-x-10 mb:gap-y-8 mb:gap-x-8 mb:mt-10 mb:pr-5">
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
