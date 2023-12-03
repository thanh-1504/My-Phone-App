import React from "react";

const PaymentPrice = () => {
  return (
    <div className="w-full h-10 bg-[#f9f9f9]">
      <div className="leading-[2.5rem] float-right mr-[20px]">
        <span className="pr-6 text-sm font-semibold">Giá trị đơn hàng: </span>
        <span className="text-base font-semibold text-red-500 ">
          27.990.000 đ
        </span>
      </div>
    </div>
  );
};

export default PaymentPrice;
