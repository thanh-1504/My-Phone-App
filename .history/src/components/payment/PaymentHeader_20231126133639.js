import React, { useState } from "react";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const PaymentHeader = ({ onDevice = {} }) => {
  const [isClosePayment, setIsClosePayment] = useState(false);
  return (
    <div
      className={`bg-[#006d9c] h-[80px] w-full  ${
        onDevice.pc ? "rounded-t-xl" : "rounded-none"
      }`}
    >
      {onDevice.pc && (
        <FontAwesomeIcon
          icon={faCircleXmark}
          onClick={() => setIsClosePayment(true)}
          className="text-white w-[60px] h-7 cursor-pointer left-[820px] top-7 fixed ${isClosePayment && 'hidden'}"
        />
      )}
    </div>
  );
};

export default PaymentHeader;
