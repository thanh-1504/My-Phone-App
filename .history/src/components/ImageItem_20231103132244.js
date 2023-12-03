import React from "react";

const ImageItem = ({ srcImg, style = "" }) => {
  return (
    <img
      src={srcImg}
      alt="imgItem"
      className={
        {`mb:w-[106px] mb:h-[106px] lg:w-[148px] lg:h-[148px] object-cover mt-10 mb-6"
      }
    ></img>
  );
};

export default ImageItem;
