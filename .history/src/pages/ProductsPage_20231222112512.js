/* eslint-disable react/style-prop-object */
import React, { useEffect } from "react";
import { v4 } from "uuid";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  handleGetAllDataNav,
  handleGetData,
} from "../reux-thunk/Slice/handler";
import ProductsItem from "../components/productItem/ProductsItem";
import LayoutPage from "../layouts/LayoutPage";
import HeaderProductNav from "../components/header/HeaderProductNav";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import FilterProduct from "../components/products/FilterProduct";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { typeProduct } = useParams();
  let { data, allData } = useSelector((state) => state.nav);
  const imgBanner = allData.filter((item) => item.brand === typeProduct);
  useEffect(() => {
    dispatch(handleGetAllDataNav());
    dispatch(handleGetData({ type: typeProduct, page: "pageIp" }));
    dispatch(handleGetData({ type: typeProduct, page: "pageIpad" }));
  }, [dispatch, typeProduct]);
  if (!data) return;
  console.log(data);
  return (
    <LayoutPage>
      <Header></Header>
      <div className="pt-[80px] lg:px-[80px] mb:px-3">
        <HeaderProductNav
          slug={typeProduct}
          data={data}
          imgSrcBanner={imgBanner}
        ></HeaderProductNav>
      </div>
      <div className="mb:px-[15px] lg:px-5 sm:px-10">
        <div className="mb-8 ">
          <FilterProduct
            slug={typeProduct}
            data={allData[0]?.filterBrandName}
            total={data.length || 0}
          ></FilterProduct>
          <div className="mb:grid mb:grid-cols-2 lg:grid-cols-4 gap-x-0 lg:gap-y-10 lg:pb-10 lg:px-0 lg:mt-10 md:gap-y-10 md:mt-8 sm:gap-y-7 sm:gap-x-10 mb:gap-y-8 mb:gap-x-3 mb:mt-10 lg:place-items-center lg:gap-x-0">
            {data.map((dataItem) => (
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
