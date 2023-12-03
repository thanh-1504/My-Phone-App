/* eslint-disable react/style-prop-object */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import PaymentHeader from "../components/payment/PaymentHeader";
import LayoutPayment from "../layouts/LayoutPayment";
import PaymentPriceAndQuantity from "../components/payment/PaymentPriceAndQuantity";
import PaymentPrice from "../components/payment/PaymentPrice";
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
          <div className="px-8 py-6 pt-6 mt-3 bg-white rounded-lg">
            <span>Thông tin khách hàng</span>
            <div>
              <div className="flex items-center mt-3">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="sex"
                    checked={true}
                    id="male"
                    className="mt-1 mr-[6px]"
                  />
                  <label
                    className="text-sm font-medium select-none"
                    htmlFor="male"
                  >
                    Anh
                  </label>
                </div>
                <div className="flex items-center ml-3">
                  <input
                    type="radio"
                    name="sex"
                    id="female"
                    className="mt-1 mr-[6px]"
                  />
                  <label
                    className="text-sm font-medium select-none"
                    htmlFor="female"
                  >
                    Chị
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-2 mt-3">
                <div className="flex flex-col w-[395px]">
                  <label htmlFor="buyer__name" className="text-sm font-medium">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    name="input__buy"
                    id="buyer__name"
                    className="w-[385px] input--payment placeholder:text-sm placeholder:text-[#dfe0e3] mt-2 focus:border-b-[#80bdff] ease-linear duration-75"
                    placeholder="Dương Nhật Thành"
                  />
                </div>
                <div className="flex flex-col w-[395px]">
                  <label htmlFor="phoneNumber" className="text-sm font-medium">
                    Số điện thoại
                  </label>
                  <input
                    id="phoneNumber"
                    name="input__phone-number"
                    type="text"
                    className="w-[385px] input--payment placeholder:text-sm placeholder:text-[#dfe0e3] mt-2 focus:border-b-[#80bdff]"
                    placeholder="0123456789"
                  />
                </div>
                <div className="flex flex-col w-[395px] mt-4 ">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="input__email"
                    type="text"
                    className="w-[786px] input--payment placeholder:text-sm placeholder:text-[#dfe0e3] mt-2 focus:border-b-[#80bdff]"
                    placeholder="abc@gmail.com"
                  />
                </div>
              </div>
            </div>
          </div>
          PaymentIn
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
