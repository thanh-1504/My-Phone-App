import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
const PaymentPage = () => {
  return (
    <div>
      <div className="z-50 modal bg-black/40">
        <div className="modal-content w-[895px]">
          <div className="header bg-[#006d9c] h-9 w-full">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="text-white w-[60px] h-8 cursor-pointer relative left-[800px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
