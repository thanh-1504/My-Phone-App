import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
const PaymentPriceAndQuantity = () => {
  return (
    <div>
      <div className="ml-[280px] flex">
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
      <span className="absolute right-[316px]  text-[#98a4b1] font-medium text-base top-[125px]">
        27.990.000 đ
      </span>
    </div>
  );
};

export default PaymentPriceAndQuantity;
