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
          data[0]?.optionProduct?.length > 3 && "lg:flex lg:flex-wrap mb:flex mb:flex-wrap"
        }`}
      >
        {data[0]?.optionProduct &&
          data[0]?.optionProduct.map((item, index) => (
            <span key={v4()} className="lg:mb-7 mb:mb-10 mb:mx-5">
              <input
                name="capicity"
                defaultChecked={index === 0}
                id={item.capacity}
                type="radio"
                className={`hidden capicity-input${index + 1}`}
              />
              <label
                onClick={() =>
                  setDataPrice({ price: item.price, capacity: item.capacity })
                }
                htmlFor={item.capacity}
                className={`bg-[#2f3033] mb:p-2 lg:my-2 lg:px-3 rounded-md lg:text-sm cursor-pointer border product--checked${
                  index + 1
                } mb:mr-3 lg:mr-4 outline-none}`}
              >
                <span className="text-white">{item.capacity}</span>
              </label>
            </span>
          ))}
      </div>
      {data[0]?.color && (
        <p className={`text-white mb:mb-4 mb:mt-8 lg:mt-0 ${ data[0]?.optionProduct?.length > 3 && 'lg:mt-[-20px]'}`}>Màu sắc</p>
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
