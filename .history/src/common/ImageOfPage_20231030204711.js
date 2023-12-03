import React from "react";

const ImageOfPage = ({ srcImg }) => {
  return (
    <div className="w-full mb:h-[216px]">
      <img src={srcImg} alt="imageBrand" />
    </div>
  );
};

export default ImageOfPage;
