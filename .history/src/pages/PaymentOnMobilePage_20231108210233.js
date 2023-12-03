import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
const PaymentOnMobilePage = () => {
  return (
    <div>
      <div className="bg-[#006d9c] h-[80px] w-full"></div>
      
      <form autoComplete="off">
        <div className="px-[200px] py-3 bg-[#ebf4f8]">
          <div className="bg-white rounded-t-lg">
            <div className="flex items-center">
              <img
                className="w-[83px] h-[88px] object-cover mr-4 ml-6"
                src="https://www.bihouse.vn/img_data/images/513311110185-zyro-image-(2).png"
                alt=""
              />
              <p className="font-medium">iPhone 15 Pro Max</p>
              <div>
                <div className="ml-[280px] flex">
                  <div className="cursor-pointer bg-[#f4f5f5] w-5 h-5 relative rounded ">
                    <FontAwesomeIcon
                      icon={faMinus}
                      className="w-[40px] h-2 absolute top-[0.35rem] right-[-0.7rem] translate-x-[-3%] translate-y-[1px] "
                    />
                  </div>
                  <span className="h-5 px-[0.314rem] ml-2 border rounded border-[rgba(34, 49, 63, 0.1)] select-none relative leading-4 mr-2 ">
                    0
                  </span>
                  <div className="cursor-pointer bg-[#f4f5f5] w-5 h-5 relative rounded">
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="w-[40px] h-2 absolute top-[0.35rem] right-[-0.7rem] translate-x-[-3%] translate-y-[1px] "
                    />
                  </div>
                </div>
                <span className="absolute right-[316px]  text-[#98a4b1] font-medium text-base top-[125px]">
                  27.990.000 đ
                </span>
              </div>
            </div>
            <div className="w-full h-10 bg-[#f9f9f9]">
              <div className="leading-[2.5rem] float-right mr-[118px]">
                <span className="pr-6 text-sm font-semibold">
                  Giá trị đơn hàng:{" "}
                </span>
                <span className="text-base font-semibold text-red-500 ">
                  27.990.000 đ
                </span>
              </div>
            </div>
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
        </div>
      </form>
    </div>
  );
};

export default PaymentOnMobilePage;
