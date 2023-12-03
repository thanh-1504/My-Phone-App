import React, { useEffect, useState } from "react";
import ProductInfoOption from "./ProductInfoOption";
import { useDispatch } from "react-redux";
import { handleGetDataPayment } from "../../reux-thunk/Slice/optionProductSlice";
import { v4 } from "uuid";
const OptionProduct = ({ data }) => {
  const dispatch = useDispatch();
  const [dataPrice, setDataPrice] = useState({});
  useEffect(() => {
    dispatch(handleGetDataPayment(dataPrice));
  }, [dispatch, dataPrice]);
  if (!data) return;
  return (
    <>
      <ProductInfoOption dataOption={dataPrice}></ProductInfoOption>
      {data[0]?.optionProduct && (
        <span className="block text-white mb:mb-8 lg:mb-0">Phiên bản</span>
      )}
      <div
        className={`lg:mt-6 lg:mb-6 ${
          data[0]?.optionProduct?.length > 3 &&
          "lg:flex lg:flex-wrap mb:flex mb:flex-wrap"
        }`}
      >
        {data[0]?.optionProduct &&
          data[0]?.optionProduct.map((item, index) => (
            <>
              
            </>
           
          ))}
      </div>
      {data[0]?.color && (
        <p
          className={`text-white mb:mb-4  lg:mt-0 ${
            data[0]?.optionProduct?.length > 3
              ? "lg:mt-[-20px] mb:mt-1"
              : "mb:mt-8"
          }`}
        >
          Màu sắc
        </p>
      )}
      <div>
        {data[0]?.color &&
          data[0]?.color.map((item, index) => (
            <span key={v4()}>
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
                } mr-4 cursor-pointer`}
              ></label>
            </span>
          ))}
      </div>
    </>
  );
};

export default OptionProduct;
