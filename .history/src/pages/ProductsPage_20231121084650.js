/* eslint-disable react/style-prop-object */
import React, { useEffect } from "react";
import ProductItemNav from "../components/ProductItemNav";
import LayoutPage from "../layouts/LayoutPage";
import ImageOfPage from "../common/ImageOfPage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilterProduct from "../components/FilterProduct";
import Brand from "../components/Brand";
import { v4 } from "uuid";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
} from "../reux-thunk/Slice/handler";
  handleGetDataBySlug,
  handleGetData,
const ProductsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleGetData());
  }, [dispatch]);
  const { slug } = useParams();
  const { data } = useSelector((state) => state.nav);
  const dataPageNav = data.filter((item) => item.slug === slug);
  useEffect(() => {
    dispatch(handleGetDataBySlug(slug));
  }, [dispatch, slug]);
  if (!dataPageNav) return;
  return (
    <LayoutPage>
      <Header></Header>
      <div className="pt-[80px]">
        <Brand
          nameBrand="iPhone"
          className="font-normal pointer-events-none select-none"
        ></Brand>
        <ImageOfPage
          className="mb:pb-10 mb:mt-10 lg:mt-5"
          srcImg="https://www.bihouse.vn/img_data/images/871562077696-Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg"
        ></ImageOfPage>
      </div>
      <div className="mb:px-[15px] lg:px-5">
        <div className="mb-8">
          <FilterProduct></FilterProduct>

          <div className="mb:grid mb:grid-cols-2 mb:gap-x-2 lg:max-w-[1200px] lg:grid-cols-4 gap-x-0 lg:pl-[45px] lg:gap-y-3 lg:pb-10">
            {dataPageNav.map((dataItem) => (
              <ProductItemNav key={v4()} data={dataItem}></ProductItemNav>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </LayoutPage>
  );
};

export default ProductsPage;
