import React, { useEffect } from "react";
import ProductsItem from "../components/ProductsItem";
import LayoutPage from "../layouts/LayoutPage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilterProduct from "../components/FilterProduct";
import Brand from "../components/Brand";
import { v4 } from "uuid";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  handleGetDataBySlug,
  handleGetAllDataNav,
  handleFilterPage,
} from "../reux-thunk/Slice/handler";

const ProductsFilterPage = () => {
  const dispatch = useDispatch();
  const { typeProduct, slug } = useParams();
  const { allData, brandName } = useSelector((state) => state.nav);
  const dataFilter = allData[0]?.filterBrandName.filter(
    (item) => item.slugFilter === slug
  );
  useEffect(() => {
    dispatch(handleGetDataBySlug(slug));
    dispatch(handleGetAllDataNav());
    dispatch(handleFilterPage({ typeProduct, slug }));
  }, [dispatch, slug, typeProduct]);
  if (!dataFilter) return;
  const data = dataFilter[0]?.dataBrand;
  const brandFilter = allData[0]?.filterBrandName.filter(
    (item) => item.brand === typeProduct
  );
  // console.log(allData);
  console.log(brandName);
  // console.log(brandFilter);
  return (
    <LayoutPage>
      <Header></Header>
      <div className="pt-[80px] lg:px-[80px] mb:px-3">
        <Brand
          className="select-none pointer-events-none"
          // nameBrand={brandName}
        ></Brand>
      </div>
      <div className="mb:px-[15px] lg:px-5">
        <div className="mb-8">
          <FilterProduct
            slug={typeProduct}
            data={brandFilter}
            total={data?.length || 0}
          ></FilterProduct>
          <div className="mb:grid mb:grid-cols-2 mb:gap-x-2 lg:max-w-[1200px] lg:grid-cols-4 gap-x-0 lg:pl-[45px] lg:gap-y-3 lg:pb-10">
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
