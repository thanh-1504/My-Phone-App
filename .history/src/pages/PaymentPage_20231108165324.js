import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faMinus } from "@fortawesome/free-solid-svg-icons";
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
              <div className="bg-white rounded-t-lg">
                <div className="flex items-center justify-around">
                  <img
                    className="w-[83px] h-[88px] object-cover"
                    src="https://www.bihouse.vn/img_data/images/513311110185-zyro-image-(2).png"
                    alt=""
                  />
                  <p>iPhone 15 Pro Max</p>
                  <div>
                    <div>
                      <FontAwesomeIcon
                        icon={faMinus}
                        className=" w-[60px] h-7 cursor-pointer text-red "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
