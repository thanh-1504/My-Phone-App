import React, { useState } from "react";
import NameProduct from "./NameProduct";
import PriceProduct from "./PriceProduct";
import ProductInfoOption from "./ProductInfoOption";

const OptionProduct = ({ data }) => {
  const [name, setName] = useState("");
  if (!data) return;
  return (
    <div className="">
      <ProductInfoOption name={name}></ProductInfoOption>
      <p className="text-white mb:mb-4">Phiên bản</p>
      <div>
        {data[0]?.OptionProduct.length > 0 &&
          data[0].OptionProduct.map((item, index) => (
            <>
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
            </>
          ))}
      </div>
      <p className="text-white mb:my-4">Màu sắc</p>
      <div>
        <input
          name="color"
          id="green"
          type="radio"
          value={"red"}
          className="hidden radioColor1"
          onClick={(e) => setName(e.target.value)}
        />
        <label
          htmlFor="green"
          className={`w-10 h-10 rounded-full bg-white inline-block border-[3px] product-color--checked2`}
        ></label>
        <input
          name="color"
          id="blue"
          type="radio"
          value={"blue"}
          className="hidden radioColor3"
          onClick={(e) => setName(e.target.value)}
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
