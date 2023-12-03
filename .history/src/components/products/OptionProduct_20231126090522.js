import React, { useState } from "react";
import ProductInfoOption from "./ProductInfoOption";
import { useDispatch } from "react-redux";

const OptionProduct = ({ data }) => {
  const dispatch = useDispatch();
  const [dataPrice, setDataPrice] = useState({});
  console.log(data);
  if (!data) return;
  return (
    <div className="">
      <ProductInfoOption dataOption={dataPrice}></ProductInfoOption>
      {data[0]?.optionProduct && (
        <p className="text-white mb:mb-4">Phiên bản</p>
      )}
      <div>
        {data[0]?.optionProduct &&
          data[0]?.optionProduct.map((item, index) => (
            <>
              <input
                name="capicity"
                defaultChecked={index === 0}
                id={item.capacity}
                value={1}
                type="radio"
                className={`hidden capicity-input${index + 1}`}
              />
              <label
                onClick={() =>
                  setDataPrice({ price: item.price, capacity: item.capacity })
                }
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
      {data[0]?.optionProduct && <p className="text-white mb:mb-4">Màu sắc</p>}
      <div>
        {data[0]?.color &&
          data[0]?.color.map((item, index) => (
            <>
              <input
                name="color"
                defaultChecked={index === 0}
                id={item.nameColor}
                type="radio"
                value={item.color}
                className={`hidden color-input${index + 1}`}
              />
              <label
                htmlFor={item.nameColor}
                style={{ backgroundColor: `${item.hexColor}` }}
                className={`w-10 h-10 rounded-full inline-block border-[3px] product-color--checked${
                  index + 1
                } lg:mr-4 cursor-pointer`}
              ></label>
            </>
          ))}
      </div>
    </div>
  );
};

export default OptionProduct;
