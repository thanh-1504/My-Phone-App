import React from "react";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const PaymentRequestOrder = () => {
  return (
    <div className="px-8 py-6 pt-6 mt-3 bg-white rounded-lg">
      <span>Yêu cầu nhận hàng</span>
      <div className="flex items-center mt-3">
        <div className="flex items-center">
          <input
            type="radio"
            name="input__request"
            id="request_order"
            className="mt-1 mr-[6px]"
          />
          <label
            className="text-sm font-medium select-none"
            htmlFor="request_order"
          >
            Nhận hàng tại nhà
          </label>
        </div>
      </div>
      <div className="flex flex-col w-[395px] mt-5">
        <label htmlFor="input__address" className="text-sm font-medium">
          Tỉnh / Thành phố
        </label>
        <div className="">
          <input
            type="text"
            name="input_address"
            id="input__address"
            className="w-[786px] input--payment placeholder:text-sm placeholder:text-[#dfe0e3] mt-2 focus:border-b-[#80bdff] ease-linear duration-75 cursor-pointer"
            placeholder="Chọn tỉnh / Thành phố"
          />
          <FontAwesomeIcon
            icon={faCaretDown}
            className="relative left-[765px] top-[-25px] cursor-pointer"
          />
          <div className="max-w-[780px] border border-[#ced4da] w-[780px]">
            <span>
              <input type="search" />
            </span>
            <ul className="list-country">
              <li>Tp Ho Chi Minh</li>
              <li>Tp Ho Chi Minh</li>
              <li>Tp Ho Chi Minh</li>
              <li>Tp Ho Chi Minh</li>
              <li>Tp Ho Chi Minh</li>
            </ul>
          </div>
        </div>
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
  );
};

export default PaymentRequestOrder;
