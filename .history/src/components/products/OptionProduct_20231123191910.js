import React, { useState } from "react";
import NameProduct from "./NameProduct";
import PriceProduct from "./PriceProduct";
import ProductInfoOption from "./ProductInfoOption";

const OptionProduct = () => {
  const [name, setName] = useState("");
  return (
    <div className="">
      <ProductInfoOption name={name}></ProductInfoOption>
      <p className="text-white mb:mb-4">Phiên bản</p>
      <div>
        <input
          name="capicity"
          id="256GB"
          type="radio"
          className="hidden radio1"
        />
        <label
          htmlFor="256GB"
          className={`bg-[#2f3033] mb:p-2 rounded-md cursor-pointer border product--checked1 mb:mr-3 lg:mr-0  }`}
        >
          <span className="text-white">256 GB</span>
        </label>
        <input
          name="capicity"
          id="512GB"
          type="radio"
          className="hidden radio2"
        />
        <label
          htmlFor="512GB"
          className={`bg-[#2f3033] mb:p-2 rounded-md cursor-pointer border product--checked2 mb:mr-3 lg:mr-0  }`}
        >
          <span className="text-white">512 GB</span>
        </label>
        <input
          name="capicity"
          id="1TB"
          type="radio"
          className="hidden radio3"
        />
        <label
          htmlFor="1TB"
          className={`bg-[#2f3033] mb:p-2 rounded-md cursor-pointer border product--checked3 }`}
        >
          <span className="text-white">1 TB</span>
        </label>
      </div>
      <p className="text-white mb:my-4">Màu sắc</p>
      <div>
        <input
          name="color"
          id="green"
          type="radio"
          value={'red'}
          onclic
          className="hidden radioColor1"
          onClick={() => setName("red")}
        />
        <label
          htmlFor="green"
          className={`w-10 h-10 rounded-full bg-white inline-block border-[3px] product-color--checked2`}
        ></label>
        <input
          name="color"
          id="blue"
          type="radio"
          className="hidden radioColor3"
          onClick={() => setName("blue")}
        />
        <label
          htmlFor="blue"
          className={`w-10 h-10 rounded-full bg-blue inline-block border-[3px] product-color--checked3`}
        ></label>
        {/* <input
          name="capicity"
          id="256GB"
          type="radio"
          className="hidden radio1"
        />
        <label
          htmlFor="256GB"
          className={`bg-[#2f3033] mb:p-2 rounded-md cursor-pointer border product--checked1 mb:mr-3 lg:mr-0  }`}
        >
          <span className="text-white">256 GB</span>
        </label> */}
      </div>
    </div>
  );
};

export default OptionProduct;
