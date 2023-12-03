import React from "react";

const ItemProduct = ({
  srcImg = "",
  title = "",
  titleClassName = "",
  imgClassName = "",
}) => {
  return (
    <div className="flex flex-col">
      <img
        src={srcImg}
        alt=""
        className={`mb:w-[108px] mb:h-[72px] object-cover ${imgClassName}`}
      />
      <p className={`text-white max-w-[177px] ${titleClassName}`}>{title}</p>
    </div>
  );
};

export default ItemProduct;
