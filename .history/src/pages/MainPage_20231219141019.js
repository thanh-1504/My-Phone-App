import WarrantyPolicy from "../components/warranty/WarrantyPolicy";
import SectionWatch from "../section/SectionWatch";
import SectionMac from "../section/SectionMac";
import SectionIphone from "../section/SectionIphone";
import SectionIpad from "../section/SectionIpad";
import SectionAirpods from "../section/SectionAirpods";
import ProductsAvailable from "../components/products/ProductsAvailable";
import LayoutPage from "../layouts/LayoutPage";
import LayoutOfBanner from "../layouts/LayoutOfBanner";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Banner from "../common/Banner";
const MainPage = () => {
  return (
    <LayoutPage>
      <Header></Header>
      <LayoutOfBanner>
        <Banner></Banner>
      </LayoutOfBanner>
      <div className="w-full mb:py-5">
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
