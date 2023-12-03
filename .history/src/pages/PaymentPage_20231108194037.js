import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
const PaymentPage = () => {
  return (
    <div>
      <div className="z-50 modal bg-black/40">
        <div className="modal-dialog">
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
                      <div className="ml-[400px] flex">
                        <div className="cursor-pointer bg-[#f4f5f5] w-5 h-5 relative rounded">
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
                      <span className="absolute right-[135px] mt-1 text-[#98a4b1] font-medium text-base">
                        27.990.000 đ
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-10 bg-[#f9f9f9]">
                    <div className="leading-[2.5rem] float-right mr-[118px]">
                      <span className="text-sm font-semibold">
                        Giá trị đơn hàng:{" "}
                      </span>
                      <span className="text-base font-semibold text-red-500">
                        27.990.000 đ
                      </span>
                    </div>
                  </div>
                </div>
                <div className="px-8 pt-6 mt-3 bg-white rounded-lg">
                  <span>Thông tin khách hàng</span>
                  <div>
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
                        <label
                          htmlFor="buyer__name"
                          className="text-sm font-medium"
                        >
                          Họ và tên
                        </label>
                        <input
                          type="text"
                          name="input__buy"
                          id="buyer__name"
                          className="w-[385px] input--payment placeholder:text-sm placeholder:text-[#dfe0e3] mt-2 focus:border-b-[#80bdff] ease-linear duration-200"
                          placeholder="Dương Nhật Thành"
                        />
                      </div>
                      <div className="flex flex-col w-[395px]">
                        <label
                          htmlFor="phoneNumber"
                          className="text-sm font-medium"
                        >
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
                          className="w-[800px] input--payment placeholder:text-sm placeholder:text-[#dfe0e3] mt-2 focus:border-b-[#80bdff]"
                          placeholder="abc@gmail.com"
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
                          className="w-[800px] input--payment placeholder:text-sm placeholder:text-[#dfe0e3] mt-2 focus:border-b-[#80bdff]"
                          placeholder="abc@gmail.com"
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
                          className="w-[800px] input--payment placeholder:text-sm placeholder:text-[#dfe0e3] mt-2 focus:border-b-[#80bdff]"
                          placeholder="abc@gmail.com"
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
                          className="w-[800px] input--payment placeholder:text-sm placeholder:text-[#dfe0e3] mt-2 focus:border-b-[#80bdff]"
                          placeholder="abc@gmail.com"
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
                          className="w-[800px] input--payment placeholder:text-sm placeholder:text-[#dfe0e3] mt-2 focus:border-b-[#80bdff]"
                          placeholder="abc@gmail.com"
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
    </div>
  );
};

export default PaymentPage;
