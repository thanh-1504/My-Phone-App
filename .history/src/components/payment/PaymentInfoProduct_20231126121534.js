import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  formatPrice,
  handlePayment,
} from "../../reux-thunk/Slice/paymentSlice";
const PaymentInfoProduct = ({ data = {} }) => {
  const dispatch = useDispatch();
  let [numberOrder, setNumberOrder] = useState(1);
  let number = 0;
  const handlePayment = (e) => {
    if (e.target.matches(".plus-icon")) {
      // console.log(e.currentTarget);
      // setNumberOrder(numberOrder++);
      // setPrice(numberOrder * price);
      // console.log(numberOrder);
    }
  };
  let price = +(data?.dataPayment?.price).replaceAll(".", "").replace("đ", "");
  const formattedPrice = (price * numberOrder).toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  const formattedProductPrice = (price * numberOrder).toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  return (
    <div className="bg-white rounded-t-lg">
      <div className="flex items-center">
        <img
          className="w-[83px] h-[88px] object-cover mr-4 ml-6"
          src="https://www.bihouse.vn/img_data/images/513311110185-zyro-image-(2).png"
          alt=""
        />
        <p>{data?.data[0]?.name}</p>
        <div>
          <div className="ml-[400px] flex">
            <div className="cursor-pointer bg-[#f4f5f5] w-5 h-5 relative rounded ">
              <FontAwesomeIcon
                icon={faMinus}
                className="w-[40px] h-2 absolute top-[0.35rem] right-[-0.7rem] translate-x-[-3%] translate-y-[1px] minus-icon"
              />
            </div>
            <span className="h-5 px-[0.314rem] ml-2 border rounded border-[rgba(34, 49, 63, 0.1)] select-none relative leading-4 mr-2 ">
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
          <span className="absolute right-[135px] mt-1 text-[#98a4b1] font-medium text-base select-none">
            {data?.dataPayment?.price}
          </span>
        </div>
      </div>
      <div className="w-full h-10 bg-[#f9f9f9]">
        <div className="leading-[2.5rem] float-right mr-[118px]">
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
