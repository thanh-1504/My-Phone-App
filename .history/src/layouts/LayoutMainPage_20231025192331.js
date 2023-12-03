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
        <ItemProduct srcImg="https://www.bihouse.vn/img_data/images/054672409108-1.png" title="1 ĐỔI 1 KHÔNG Thêm Phí KHÔNG hoá đơn"></ItemProduct>
      </div>
    </div>
  );
};

export default LayoutMainPage;
