import React from "react";

const ItemProduct = ({ srcImg = "", title = "" }) => {
  return (
    <div className="flex flex-col">
      <img
        src={srcImg}
        alt=""
        className="mb:w-[108px] mb:h-[72px] object-cover"
      />
      <p className="text-white max-w-[177px]">{title}</p>
    </div>
  );
};

export default ItemProduct;
