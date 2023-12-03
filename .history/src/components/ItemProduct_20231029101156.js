import React from "react";
import { useNavigate } from "react-router-dom";

const ItemProduct = ({
  srcImg = "",
  title = "",
  titleClassName = "",
  imgClassName = "",
}) => {
  const navigate = useNavigate()
  return (
    <div onClick={()=> navigate(`products/${}`)} className="flex flex-col lg:max-w-[160px] w-full">
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
