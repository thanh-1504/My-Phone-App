import React from "react";

const ImageItem = ({ srcImg, style = "", onClick = () => {} }) => {
  return (
    <img
      onClick={onClick}
      src={srcImg}
      alt="imgItem"
      className={`mb:w-[106px] mb:h-[106px] lg:w-[148px] lg:h-[148px] object-cover mt-[50px] lg:mb-10 mb:mb-6 ${style} lg:hover:scale-125 ease-linear duration-300`}
    ></img>
  );
};

export default ImageItem;
