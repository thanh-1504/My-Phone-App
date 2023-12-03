import React, { useEffect } from "react";

import { v4 } from "uuid";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleFilterPage } from "../reux-thunk/Slice/handler";
import LayoutPage from "../layouts/LayoutPage";
import Header from "../components/header/Header";
import Brand from "../layouts/layoutNav/Brand";
import FilterProduct from "../components/products/FilterProduct";
import ProductsItem from "../components/productItem/ProductsItem";
import Footer from "../components/footer/Footer";

const ProductsFilterPage = () => {
  const dispatch = useDispatch();
  const { typeProduct, slug } = useParams();
  const { dataFilter } = useSelector((state) => state.nav);
  const { nameBrand, brandFilter, data } = dataFilter;
  useEffect(() => {
    dispatch(handleFilterPage({ typeProduct, slug }));
  }, [dispatch, slug, typeProduct]);
  if (!nameBrand || !brandFilter || !data || !dataFilter) return;
  return (
    <LayoutPage>
      <Header></Header>
      <div className="pt-[80px] lg:px-[80px] mb:px-3 md:mb-10 lg:mb-0 sm:mb-10">
        <Brand
          className="pointer-events-none select-none"
          nameBrand={nameBrand[0]?.name}
        ></Brand>
      </div>
      <div className="mb:px-[15px] lg:px-5">
        <div className="mb-8">
          <FilterProduct
            slug={typeProduct}
            data={brandFilter}
            total={data.length || 0}
          ></FilterProduct>
          <div className="mb:grid mb:grid-cols-2 lg:max-w-[1200px] lg:grid-cols-4 !gap-x-8 lg:gap-y-3 lg:pb-10 mt-10 md:gap-y-10 sm:gap-y-10 mb:gap-y-8 lg:pl-[55px] md:pl-[22px] sm:pl-[15px] mb:!gap-x-0 ">
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

export default ProductsFilterPage;
