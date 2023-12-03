import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
const PaymentInfoProductOnMb = ({ dataPay }) => {
  console.log(data);
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
  console.log(data);
  return (
    <div className="bg-white rounded-t-lg">
      <div className="flex items-center">
        <img
          className="w-[83px] h-[88px] object-cover mr-4 ml-6"
          src={data[0]?.imgSrc}
          alt=""
        />
        <p className="font-medium">iPhone 15 Pro Max</p>
        <div>
          <div className="flex mt-8 ml-5 mb-1">
            <div className="cursor-pointer bg-[#f4f5f5] w-5 h-5 relative rounded ">
              <FontAwesomeIcon
                icon={faMinus}
                className="w-[40px] h-2 absolute top-[0.35rem] right-[-0.7rem] translate-x-[-3%] translate-y-[1px] "
              />
            </div>
            <span className="h-5 px-[0.314rem] ml-2 border rounded border-[rgba(34, 49, 63, 0.1)] select-none relative leading-4 mr-2 ">
              0
            </span>
            <div className="cursor-pointer bg-[#f4f5f5] w-5 h-5 relative rounded">
              <FontAwesomeIcon
                icon={faPlus}
                className="w-[40px] h-2 absolute top-[0.35rem] right-[-0.7rem] translate-x-[-3%] translate-y-[1px] "
              />
            </div>
          </div>
          <span className="text-[#98a4b1] font-medium text-base ml-4">
            27.990.000 đ
          </span>
        </div>
      </div>
      <div className="w-full h-10 bg-[#f9f9f9]">
        <div className="leading-[2.5rem] float-right mr-[16px]">
          <span className="pr-6 text-sm font-semibold">Giá trị đơn hàng: </span>
          <span className="text-base font-semibold text-red-500 ">
            27.990.000 đ
          </span>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfoProductOnMb;
