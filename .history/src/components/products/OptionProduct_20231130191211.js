import React, { useEffect, useState } from "react";
import ProductInfoOption from "./ProductInfoOption";
import { useDispatch, useSelector } from "react-redux";
import { handleGetDataPayment } from "../../reux-thunk/Slice/optionProductSlice";

const OptionProduct = ({ data }) => {
  const dispatch = useDispatch();
  const [dataPrice, setDataPrice] = useState({});
  useEffect(() => {
    dispatch(handleGetDataPayment(dataPrice));
  }, [dispatch, dataPrice]);
  if (!data) return;
  return (
    <div className="">
      <ProductInfoOption dataOption={dataPrice}></ProductInfoOption>
      {data[0]?.optionProduct && (
        <span className="text-white mb:mb-4">Phiên bản</span>
      )}
      <div
        className={`lg:mt-8 ${
          data[0]?.optionProduct.length > 3 &&
          "lg:grid lg:grid-cols-2 lg:gap-x-3 lg:gap-y-6"
        }`}
      >
        {data[0]?.optionProduct &&
          data[0]?.optionProduct.map((item, index) => (
            <>
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
