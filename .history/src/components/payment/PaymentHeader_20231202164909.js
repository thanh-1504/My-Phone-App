import React, { useState } from "react";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { handleBuyProduct } from "../../reux-thunk/Slice/paymentSlice";

const PaymentHeader = () => {
  const dispatch = useDispatch();
  return (
    <div className={`bg-[#006d9c] h-[80px] w-full static`}>
      <FontAwesomeIcon
        icon={faCircleXmark}
        onClick={() => dispatch(handleBuyProduct(false))}
        className="text-white w-[60px] h-7 cursor-pointer"
      />
    </div>
  );
};

export default PaymentHeader;
