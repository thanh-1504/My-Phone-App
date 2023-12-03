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
              id={item.color}
              type="radio"
              value={item.color}
              className={`hidden color-input${index + 1}`}
              onClick={(e) => setName(e.target.value)}
            />
            <label
              htmlFor={item.color}
              className={`w-10 h-10 rounded-full inline-block border-[3px] product-color--checked${index + 1}`}
            ></label>
          </>
        ))}
      </div>
    </div>
  );
};

export default OptionProduct;
