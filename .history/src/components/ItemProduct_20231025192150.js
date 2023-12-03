import React from "react";

const ItemProduct = ({srcImg="",}) => {
  return (
    <div className="flex flex-col">
      <img
        src="https://www.bihouse.vn/img_data/images/334828119623-apple-cateipad.png"
        alt=""
        className="mb:w-[108px] mb:h-[72px] object-cover"
      />
      <p className="text-white"> Lỗi là đổi k sửa</p>
    </div>
  );
};

export default ItemProduct;
