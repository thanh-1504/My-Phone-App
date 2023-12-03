import React from "react";

const BannerNav = ({ srcImg = "", slug = "" }) => {
  let style = "";
  switch (slug) {
    case "iPhone": {
      style = "mb:h-[216px] lg:h-[618px] max-w-[1100px]";
      break;
    }
    case "iPad": {
      style = "mb:h-[216px] lg:h-[275px] max-w-[1100px] rounded-lg";
      break;
    }
    case "Mac": {
      style = "mb:h-[216px] lg:h-[275px] max-w-[1100px] rounded-lg";
      break;
    }
    case "AirPods": {
      style = "mb:h-[216px] lg:h-[600px] max-w-[1100px]";
      break;
    }
    case "Watch": {
      style = "mb:h-[216px] lg:h-[190px] max-w-[1100px]";
      break;
    }
    default:
      break;
  }
  return (
    <div className={`${style} mb-[50px]`}>
      <img
        src={srcImg}
        alt="imageBrand"
        className={`w-full h-full object-cover`}
      />
    </div>
  );
};

export default BannerNav;
