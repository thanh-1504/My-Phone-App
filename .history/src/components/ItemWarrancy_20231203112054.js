import React from "react";

const ItemWarrancy = ({
  srcImg = "",
  imgClassName = "",
  titleClassName = "",
  title = "",
}) => {
  return (
    <div className="flex flex-col lg:max-w-[160px] w-full ">
      <img
        src={srcImg}
        alt="warranty"
        className={`w-full h-full object-cover ${imgClassName}`}
      />
      <p className={`text-white max-w-[177px] ${titleClassName}`}>{title}</p>
    </div>
  );
};

export default ItemWarrancy;
