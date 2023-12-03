import React from "react";

const BannerNav = ({ className = "", srcImg = "" }) => {
  return (
    <div className="mb:h-[216px] lg:h-[618px] w-[1200px]">
      <img
        src={srcImg}
        alt="imageBrand"
        className={`w-full h-full object-cover ${className}`}
      />
    </div>
  );
};

export default BannerNav;
