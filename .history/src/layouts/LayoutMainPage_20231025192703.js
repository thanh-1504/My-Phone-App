import React from "react";
import Header from "../components/Header";
import Banner from "../common/Banner";
import Warranty from "../components/Warranty";
import ItemProduct from "../components/ItemProduct";

const LayoutMainPage = () => {
  return (
    <div className="w-full h-screen bg-black ">
      <Header></Header>
      <div className="pt-9">
        <Banner></Banner>
      </div>
      <div className="w-full max-w-[384px] mb:px-10 mb:py-5">
        {/* <Warranty></Warranty> */}
        <ItemProduct
          srcImg="https://www.bihouse.vn/img_data/images/253309473791-1icon.png"
          title="1 ĐỔI 1 KHÔNG THÊM PHÍ KHÔNG HÓA ĐƠN"
          titleClassName=""
        ></ItemProduct>
      </div>
    </div>
  );
};

export default LayoutMainPage;
