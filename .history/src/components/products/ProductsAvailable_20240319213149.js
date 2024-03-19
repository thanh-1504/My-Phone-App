import React from "react";
import ItemProduct from "../items/ItemProduct";
const ProductsAvailable = () => {
  return (
    <div className="mb:grid mb:grid-cols-3 mb:gap-y-6 lg:flex lg:mt-[80px] lg:justify-center bg-[#0f0f0f] mb:mt-[60px] cursor-pointer mb:mb-10 lg:mb-[60px] lg:gap-x-10">
      <div>
        <ItemProduct
          srcImg="https://www.bihouse.vn/img_data/images/054672409108-1.png"
          title="iPhone"
          imgClassName="mb:w-[108px] mb:h-[69px] mb:relative mb:left-[0.5rem]  lg:h-[105px] lg:w-[158px] "
          titleClassName="mb:mt-1 mb:h-[34px] text-xs font-semibold mb:text-center lg:mt-3 font-bold text-[15px] mb:text-[13px]"
        ></ItemProduct>
      </div>
      <div className="">
        <ItemProduct
          srcImg="https://www.bihouse.vn/img_data/images/334828119623-apple-cateipad.png"
          title="iPad"
          imgClassName="mb:w-[75px] mb:h-[67px] mb:relative mb:left-[1.8rem] lg:left-[0.25rem] lg:h-[105px] lg:w-[158px]  "
          titleClassName="mb:mt-1 mb:h-[34px] text-xs font-semibold mb:text-center lg:mt-3 font-bold text-[15px] mb:text-[13px]"
        ></ItemProduct>
      </div>
      <div className="">
        <ItemProduct
          srcImg="https://www.bihouse.vn/img_data/images/601169082553-apple-catemac.png"
          title="Mac"
          imgClassName="mb:w-[90px] mb:h-[76px] mb:relative mb:left-[1rem] lg:left-[-0.1rem] lg:h-[105px] lg:w-[158px]"
          titleClassName="mb:mt-1 mb:h-[34px] text-xs font-semibold mb:text-center lg:mt-3 font-bold text-[15px] mb:text-[13px]"
        ></ItemProduct>
      </div>
      <div className="">
        <ItemProduct
          srcImg="https://www.bihouse.vn/img_data/images/505084337457-apple-catesound.png"
          title="AirPods"
          imgClassName="mb:w-[74px] mb:h-[75px] mb:relative mb:left-[1.6rem] lg:left-0 lg:h-[105px] lg:w-[158px]"
          titleClassName="mb:mt-1 mb:h-[34px] text-xs font-semibold mb:text-center lg:mt-3 font-bold text-[15px] mb:text-[13px]"
        ></ItemProduct>
      </div>
      <div className="">
        <ItemProduct
          srcImg="https://www.bihouse.vn/img_data/images/804926888248-Untitled-1.png"
          title="Watch"
          imgClassName="mb:w-[108px] mb:h-[75px] mb:relative mb:left-[0.7rem] lg:left-[-0.3rem] lg:h-[105px] lg:w-[158px]"
          titleClassName="mb:mt-1 mb:h-[34px] text-xs font-semibold mb:text-center lg:mt-3 font-bold lg:text-[15px]  mb:text-[13px]"
        ></ItemProduct>
      </div>
    </div>
  );
};

export default ProductsAvailable;
