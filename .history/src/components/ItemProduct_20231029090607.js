import React from "react";

const ItemProduct = ({
  srcImg = "",
  title = "",
  titleClassName = "",
  imgClassName = "",
}) => {
  return (
    <div onScroll={} className="flex flex-col lg:max-w-[160px] w-full">
      <img
        src={srcImg}
        alt="warranty"
        className={`w-full h-full object-cover ${imgClassName}`}
      />
      <p className={`text-white max-w-[177px] ${titleClassName}`}>{title}</p>
    </div>
  );
};

export default ItemProduct;
