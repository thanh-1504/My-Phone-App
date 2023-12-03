import React from "react";
import {
    faCircleXmark,
    faMinus,
    faPlus,
  } from "@fortawesome/free-solid-svg-icons";
const PaymentHeader = ({ style = "", children }) => {
  return   <div className="bg-[#006d9c] h-[80px] w-full rounded-t-xl "></div>
  <FontAwesomeIcon
    icon={faCircleXmark}
    className="text-white w-[60px] h-7 cursor-pointer left-[820px] top-7 fixed"
  />
};

export default PaymentHeader;
