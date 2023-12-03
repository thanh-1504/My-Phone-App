import React from "react";

const InformationLine = () => {
  return (
    <div className="text-red-500">
      <h2>Thông tin đơn hàng</h2>
      <span>Thông tin giao hàng</span>
      <div>
        <p>Họ tên: Dương Nhật Thành</p>
        <p>Số điện thoại: 0562407343</p>
        <p>Địa chỉ: 131/3 minh phụng p9 q6</p>
      </div>
      <p>Phương thức thanh toán</p>
      <p>Thanh toán khi giao hàng (COD)</p>
    </div>
  );
};

export default InformationLine;
