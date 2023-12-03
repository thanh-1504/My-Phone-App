import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
const PaymentPage = () => {
  return (
    <div>
      <div className="z-50 modal bg-black/40">
        <div className="modal-content w-[895px]">
          <div className="bg-[#006d9c] h-[80px] w-full rounded-t-xl ">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="text-white w-[60px] h-7 cursor-pointer relative left-[820px] top-7 "
            />
          </div>
          <form autoComplete="off">
            <div className="px-4 py-3 bg-[#ebf4f8]">
                
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
