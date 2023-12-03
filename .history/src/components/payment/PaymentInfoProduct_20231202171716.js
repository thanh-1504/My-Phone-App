import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
const PaymentInfoProduct = ({ dataPay = {} }) => {
  let [numberOrder, setNumberOrder] = useState(1);
  const { data } = useSelector((state) => state.detailSlice);
  if (!dataPay?.dataPayment?.price) return;
  let price = +(dataPay?.dataPayment?.price)
    .replaceAll(".", "")
    .replace("đ", "");
  const formattedPrice = (price * numberOrder).toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  const formattedProductPrice = price.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  if (numberOrder < 1) setNumberOrder(1);
  return (
    <div className="bg-white rounded-t-lg">
      <div className="flex items-center lg:p-[8px]">
        <img
          className="w-[83px] h-[88px] object-cover mr-4 ml-6"
          src={data[0]?.imgSrc}
          alt="imageProduct"
        />
        <p>{dataPay?.data[0]?.name}</p>
        <span>
          <div className="flex items-center relative left-[88px]">
            <div className="cursor-pointer bg-[#f4f5f5] w-5 h-5 relative rounded ">
              <FontAwesomeIcon
                icon={faMinus}
                onClick={() => setNumberOrder(numberOrder--)}
                className="w-[40px] h-2 absolute top-[0.35rem] right-[-0.7rem] translate-x-[-3%] translate-y-[1px] minus-icon"
              />
            </div>
            <span className="h-5 px-[0.314rem] border rounded border-[rgba(34, 49, 63, 0.1)] select-none relative leading-4 sm:mx-4">
              {numberOrder}
            </span>
            <div className="cursor-pointer bg-[#f4f5f5] w-5 h-5 relative rounded">
              <FontAwesomeIcon
                icon={faPlus}
                onClick={() => setNumberOrder(numberOrder++)}
                className="w-[40px] h-2 absolute top-[0.35rem] right-[-0.7rem] translate-x-[-3%] translate-y-[1px] plus-icon"
              />
            </div>
          </div>
          <span className="absolute right-[90px] mt-1 text-[#98a4b1] font-medium text-base select-none">
            {formattedProductPrice}
          </span>
        </span>
      </div>
      <div className="w-full h-10 bg-[#f9f9f9]">
        <div className="leading-[2.5rem] float-right mr-[94px]">
          <span className="text-sm font-semibold select-none">
            Giá trị đơn hàng:{" "}
          </span>
          <span className="text-base font-semibold text-red-500 select-none">
            {formattedPrice}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfoProduct;
