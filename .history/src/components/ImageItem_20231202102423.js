import React from "react";

const ImageItem = ({ srcImg, style = "", onClick = () => {} }) => {
  return (
    <img
      onClick={onClick}
      src={srcImg}
      alt="imgItem"
      className={`mb:w-[106px] lg:w-[148px] lg:h-[148px] object-contain lg:mt-[50px] lg:mb-10 mb:mb-8 mb:mt-8 ${style} cursor-pointer md:h-[200px]`}
    ></img>
  );
};

export default ImageItem;
