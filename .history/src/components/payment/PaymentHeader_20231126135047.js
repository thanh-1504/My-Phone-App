import React, { useState } from "react";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { handleBuyProduct } from "../reux-thunk/Slice/paymentSlice";

const PaymentHeader = ({ onDevice = {} }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={`bg-[#006d9c] h-[80px] w-full  ${
        onDevice.pc ? "rounded-t-xl" : "rounded-none"
      }`}
    >
      {onDevice.pc && (
        <FontAwesomeIcon
          icon={faCircleXmark}
          onClick={() => dispatch(handleBuyProduct(true))}
          className="text-white w-[60px] h-7 cursor-pointer left-[820px] top-7 fixed"
        />
      )}
    </div>
  );
};

export default PaymentHeader;
