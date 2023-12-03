import WarrantyPolicy from "../components/warranty/WarrantyPolicy";
import SectionWatch from "../section/SectionWatch";
import SectionMac from "../section/SectionMac";
import SectionIphone from "../section/SectionIphone";
import SectionIpad from "../section/SectionIpad";
import SectionAirpods from "../section/SectionAirpods";
import React from "react";
import ProductsAvailable from "../components/products/ProductsAvailable";
import LayoutPage from "../layouts/LayoutPage";
import LayoutOfBanner from "../layouts/LayoutOfBanner";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../common/Banner";
const MainPage = () => {
  return (
    <LayoutPage>
      <Header></Header>
      <LayoutOfBanner>
        <Banner></Banner>
      </LayoutOfBanner>
      <div className="w-full mb:px-1 mb:py-5  lg:pr-[15px] ">
        <WarrantyPolicy></WarrantyPolicy>
        <ProductsAvailable></ProductsAvailable>
        <SectionIphone></SectionIphone>
        <SectionIpad></SectionIpad>
        <SectionMac></SectionMac>
        <SectionWatch></SectionWatch>
        <SectionAirpods></SectionAirpods>
      </div>
      <Footer></Footer>
    </LayoutPage>
  );
};

export default MainPage;
