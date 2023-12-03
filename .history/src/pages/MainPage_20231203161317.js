import LayoutPage from "../layouts/LayoutPage";

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
