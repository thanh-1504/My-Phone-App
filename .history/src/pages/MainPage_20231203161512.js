import Banner from "../common/Banner";
import Header from "../components/header/Header";
import ProductsAvailable from "../components/products/ProductsAvailable";
import WarrantyPolicy from "../components/warranty/WarrantyPolicy";
import LayoutOfBanner from "../layouts/LayoutOfBanner";
import LayoutPage from "../layouts/LayoutPage";
import SectionIphone from "../section/SectionIphone";
import SectionMac from "../section/SectionMac";
import SectionIpad from "../section/SectionIpad";
import SectionWatch from "../section/SectionWatch";
import SectionAirpods from "../section/SectionAirpods";
import Footer from "../components/footer/Footer";

const MainPage = () => {
  return (
    <LayoutPage>
      <Header></Header>
      <LayoutOfBanner>
        <Banner></Banner>
      </LayoutOfBanner>
      <div className="w-full mb:px-1 mb:py-5">
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
