import React from "react";

const ImageItem = ({ srcImg, style = "", onClick = () => {} }) => {
  return (
    <img
      onClick={onClick}
      src={srcImg}
      alt="imgItem"
      className={`mb:w-[106px] lg:w-auto lg:h-[148px] object-cover lg:mt-[30px] lg:mb-10 mb:mb-8 mb:mt-8 ${style} cursor-pointer md:w-[200px] md:mt-[45px] sm:w-[180px] sm:mt-[80px]`}
    ></img>
  );
};

export default ImageItem;
