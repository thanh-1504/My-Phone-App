import React from "react";

const ImageItem = ({ srcImg, style = "", onClick = () => {} }) => {
  return (
    <img
      onClick={onClick}
      src={srcImg}
      alt="imgItem"
      className={`mb:w-[106px]  lg:w-[148px] lg:h-[148px] object-cover lg:mt-[50px] lg:mb-10 mb:mb-8 ${style} lg:hover:scale-125 ease-linear duration-300 mb:mt-6`}
    ></img>
  );
};

export default ImageItem;
