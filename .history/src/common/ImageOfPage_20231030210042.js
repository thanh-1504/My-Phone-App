import React from "react";

const ImageOfPage = ({ srcImg = "", className = "" }) => {
  return (
    <div className="w-full mb:h-[216px]">
      <img
        src={srcImg}
        alt="imageBrand"
        className={`w-full h-full object-cover ${className}`}
      />
    </div>
  );
};

export default ImageOfPage;
