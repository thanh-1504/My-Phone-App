import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import PaymentHeader from "../components/payment/PaymentHeader";
import LayoutPayment from "../layouts/LayoutPayment";
import PaymentInfoProduct from "../components/payment/PaymentInfoProduct";
const PaymentPage = () => {
  return (
    <div>
      <div className="z-50 modal bg-black/40">
        <div className="modal-content w-[895px] h-[450px]  overflow-y-auto overflow-x-hidden ">
          <PaymentHeader onDevice={{ mobile: false, pc: true }}></PaymentHeader>
          <form autoComplete="off">
            <LayoutPayment>
              <PaymentInfoProduct></PaymentInfoProduct>
              <PaymentInfoBuyer></PaymentInfoBuyer>
              <div className="px-8 py-6 pt-6 mt-3 bg-white rounded-lg">
                <span>Yêu cầu nhận hàng</span>
                <div className="flex items-center mt-3">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="sex"
                      id="male"
                      className="mt-1 mr-[6px]"
                    />
                    <label
                      className="text-sm font-medium select-none"
                      htmlFor="male"
                    >
                      Nhận hàng tại nhà
                    </label>
                  </div>
                </div>
                <div className="flex flex-col w-[395px] mt-5">
                  <label
                    htmlFor="input__address"
                    className="text-sm font-medium"
                  >
                    Tỉnh / Thành phố
                  </label>
                  <input
                    type="text"
                    name="input_address"
                    id="input__address"
                    className="w-[786px] input--payment placeholder:text-sm placeholder:text-[#dfe0e3] mt-2 focus:border-b-[#80bdff] ease-linear duration-75"
                    placeholder="Dương Nhật Thành"
                  />
                </div>
                <div className="flex flex-col w-[395px] mt-5">
                  <label htmlFor="input__note" className="text-sm font-medium">
                    Ghi chú
                  </label>
                  <input
                    type="text"
                    name="input__note"
                    id="input__note"
                    className="w-[786px] input--payment placeholder:text-sm placeholder:text-[#dfe0e3] mt-2 focus:border-b-[#80bdff] ease-linear duration-75"
                    placeholder="Điền ghi chú"
                  />
                </div>
              </div>
              <div className="pt-6 pb-12 text-center">
                <button className="w-[265px] h-[45px] bg-[#006d9c] text-white font-medium rounded-lg hover:scale-x-105 hover:scale-y-105 ease-in duration-100">
                  Xác nhận đặt hàng
                </button>
              </div>
            </LayoutPayment>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
