import React from "react";

const ImageOfPage = ({ srcImg = "", className = "" }) => {
  return (
    <div className="w-[400px] mb:h-[216px] lg:h-[618px]">
      <img
        src={srcImg}
        alt="imageBrand"
        className={`w-full h-full object-cover ${className}`}
      />
    </div>
  );
};

export default ImageOfPage;
