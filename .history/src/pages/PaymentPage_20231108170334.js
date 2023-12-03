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
                <div className="flex items-center">
                  <img
                    className="w-[83px] h-[88px] object-cover mr-4 ml-6"
                    src="https://www.bihouse.vn/img_data/images/513311110185-zyro-image-(2).png"
                    alt=""
                  />
                  <p>iPhone 15 Pro Max</p>
                  <div>
                    <div className="ml-[400px]">
                      <div className="cursor-pointer bg-[#f4f5f5] w-5 h-5 relative rounded">
                        <FontAwesomeIcon
                          icon={faMinus}
                          className="w-[40px] h-2 absolute top-[0.35rem] right-[-0.7rem] "
                        />
                      </div>
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
