import React from "react";

const PaymentInfoBuyer = () => {
  return (
    <div className="px-8 py-6 pt-6 mt-3 bg-white rounded-lg">
      <span>Thông tin khách hàng</span>
      <div>
        <div className="flex items-center mt-3">
          <div className="flex items-center">
            <input
              type="radio"
              name="sex"
              id="male"
              checked={true}
              className="mt-1 mr-[6px]"
            />
            <label className="text-sm font-medium select-none" htmlFor="male">
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
            <label className="text-sm font-medium select-none" htmlFor="female">
              Chị
            </label>
          </div>
        </div>
        <div className="mt-3">
          <div className="flex justify-between">
            <div className="w-[395px]">
              <label htmlFor="buyer__name" className="text-sm font-medium">
                Họ và tên
              </label>
              <input
                type="text"
                name="input__buy"
                id="buyer__name"
                className="w-full input--payment placeholder:text-sm placeholder:text-[#dfe0e3] mt-2 focus:border-b-[#80bdff] ease-linear duration-75 mb-3"
                placeholder="Dương Nhật Thành"
              />
            </div>
            <div className="w-[395px]">
              <label htmlFor="phoneNumber" className="text-sm font-medium">
                Số điện thoại
              </label>
              <input
                id="phoneNumber"
                name="input__phone-number"
                type="text"
                className="w-full input--payment placeholder:text-sm placeholder:text-[#dfe0e3] mt-2 focus:border-b-[#80bdff] mb-3"
                placeholder="0123456789"
              />
            </div>
          </div>
          <div className="">
            <label htmlFor="email" className="text-sm font-medium block">
              Email
            </label>
            <input
              id="email"
              name="input__email"
              type="text"
              className="w-[800px] input--payment placeholder:text-sm placeholder:text-[#dfe0e3] focus:border-b-[#80bdff]"
              placeholder="abc@gmail.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfoBuyer;
