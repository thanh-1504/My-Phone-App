/* eslint-disable react/style-prop-object */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import PaymentHeader from "../components/payment/PaymentHeader";
import LayoutPayment from "../layouts/LayoutPayment";
import PaymentPriceAndQuantity from "../components/payment/PaymentPriceAndQuantity";
import PaymentPrice from "../components/payment/PaymentPrice";
import PaymentInfoBuyer from "../components/payment/PaymentInfoBuyer";
const PaymentOnMobilePage = () => {
  return (
    <div>
      <PaymentHeader onDevice={{ mobile: true, pc: false }}></PaymentHeader>
      <form autoComplete="off">
        <LayoutPayment style="px-[200px] py-3 bg-[#ebf4f8] ">
          <div className="bg-white rounded-t-lg">
            <div className="flex items-center">
              <img
                className="w-[83px] h-[88px] object-cover mr-4 ml-6"
                src="https://www.bihouse.vn/img_data/images/513311110185-zyro-image-(2).png"
                alt=""
              />
              <p className="font-medium">iPhone 15 Pro Max</p>
              <PaymentPriceAndQuantity></PaymentPriceAndQuantity>
            </div>
            <PaymentPrice></PaymentPrice>
          </div>
          <PaymentInfoBuyer></PaymentInfoBuyer>
          <div className="px-8 py-6 pt-6 pb-8 mt-3 bg-white rounded-lg">
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
              <label htmlFor="input__address" className="text-sm font-medium">
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
  );
};

export default PaymentOnMobilePage;
