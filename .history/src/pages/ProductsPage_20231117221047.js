/* eslint-disable react/style-prop-object */
import React, { useEffect } from "react";
import ProductsItem from "../components/ProductsItem";
import LayoutPage from "../layouts/LayoutPage";
import ImageOfPage from "../common/ImageOfPage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilterProduct from "../components/FilterProduct";
import Brand from "../components/Brand";
import PaymentPage from "./PaymentPage";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  handleGetData,
  handleGetDataProductByName,
} from "../reux-thunk/Slice/handler";

const test = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

const GetProduct = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleGetData());
  }, [dispatch]);
  const { slug } = useParams();
  const { dataIp } = useSelector((state) => state.iPhone);
  const { dataMainPage: dataiPhoneProduct } = dataIp;
  if (!dataIp || !dataiPhoneProduct) return;
  const data = dataiPhoneProduct[0].sectionIphone;
  console.log(data);
  const getProduct = () => {
    switch (slug) {
      case "iPhone": {
        return (
          <>
            {/* {data.map((dataItem) => (
              <ProductsItem data={dataItem}></ProductsItem>
            ))} */}
            
          </>
        );
      }
      default:
        break;
    }
  };
  getProduct();
};
const ProductsPage = () => {
  // if (!dataIp || !dataMainPage) return;
  // const dataProductIphone = dataMainPage[0].sectionIphone;
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
            <GetProduct></GetProduct>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </LayoutPage>
  );
};

export default ProductsPage;
