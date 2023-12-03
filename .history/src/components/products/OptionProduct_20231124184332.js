import React, { useState } from "react";
import NameProduct from "./NameProduct";
import PriceProduct from "./PriceProduct";
import ProductInfoOption from "./ProductInfoOption";

const OptionProduct = ({ data }) => {
  const [name, setName] = useState("");
  if (!data) return;
  console.log(data);
  return (
    <div className="">
      <ProductInfoOption name={name}></ProductInfoOption>
      <p className="text-white mb:mb-4">Phiên bản</p>
      <div>
        {data[0]?.optionProduct.map((item, index) => (
          <>
            <input
              name="capicity"
              id={item.capacity}
              type="radio"
              className={`hidden capicity-input${index + 1}`}
            />
            <label
              htmlFor={item.capacity}
              className={`bg-[#2f3033] mb:p-2 lg:px-3 rounded-md cursor-pointer border product--checked${
                index + 1
              } mb:mr-3 lg:mr-4 outline-none }`}
            >
              <span className="text-white">{item.capacity}</span>
            </label>
          </>
        ))}
      </div>
      <p className="text-white mb:my-4">Màu sắc</p>
      <div>
        {data[0]?.color.map((item, index) => (
          <>
            <input
              name="color"
              id={item.nameColor}
              type="radio"
              className={`hidden color-input${index + 1}`}
            />
            <label
              htmlFor={item.capacity}
              className={`bg-[#2f3033] mb:p-2 lg:px-3 rounded-md cursor-pointer border product-input--checked${
                index + 1
              } mb:mr-3 lg:mr-4 outline-none }`}
            >
              <span className="text-white">{item.capacity}</span>
            </label>
          </>
        ))}
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
