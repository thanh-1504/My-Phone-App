import React from "react";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const PaymentHeader = ({ style = "", 
    <div className="bg-[#006d9c] h-[80px] w-full rounded-t-xl ">
      <FontAwesomeIcon
        icon={faCircleXmark}
        className="text-white w-[60px] h-7 cursor-pointer left-[820px] top-7 fixed"
      />
    </div>
  );
};

export default PaymentHeader;
