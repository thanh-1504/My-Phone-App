import React, { useEffect } from "react";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { handleFetchProvince } from "../../reux-thunk/Slice/handler";
import { handleShow } from "../../reux-thunk/Slice/paymentSlice";
const PaymentRequestOrder = ({ dataProvince }) => {
  const dispatch = useDispatch();
  const { show } = useSelector((state) => state.payment);
  console.log(dataProvince);
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
        <label htmlFor="select__address" className="mb-3 text-sm font-medium">
          Tỉnh / Thành phố
        </label>
        <div>
          <div className="w-[786px] cursor-pointer flex items-center">
            <span className="text-sm text-[#e3e0de] mb-1">
              Chọn Tỉnh / Thành Phố
            </span>
            <FontAwesomeIcon
              icon={faCaretDown}
              className="ml-auto cursor-pointer"
            />
          </div>
          <div className="w-[786px] h-[0.5px] bg-[#ced4da]"></div>
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
