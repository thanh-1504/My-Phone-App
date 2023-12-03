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
              className="w-10 h-4 text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
