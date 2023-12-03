import WarrantyPolicy from "../components/warranty/WarrantyPolicy";
import SectionWatch from "../section/SectionWatch";
import SectionMac from "../section/SectionMac";
import SectionIphone from "../section/SectionIphone";
import SectionIpad from "../section/SectionIpad";
import SectionAirpods from "../section/SectionAirpods";
import React from "react";
import ProductsAvailable from "../components/products/ProductsAvailable";
import LayoutOfBanner from "../layouts/LayoutOfBanner";
import Header from "../components/Header";
import Banner from "../common/Banner";
import Footer from "../components/Footer";
import LayoutPage from "../layouts/LayoutPage";
const MainPage = () => {
  return (
    <LayoutPage>
      <Header></Header>
      <LayoutOfBanner>
        <Banner></Banner>
      </LayoutOfBanner>
      <div className="w-full mb:px-1 mb:py-5 max-w-[1200px] lg:pl-[58px] ">
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
