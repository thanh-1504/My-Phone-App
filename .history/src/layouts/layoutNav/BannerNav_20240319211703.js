import React from "react";

const BannerNav = ({ srcImg = "", slug = "" }) => {
  let style = "";
  switch (slug) {
    case "iPhone": {
      style = "";
      break;
    }
    case "iPad": {
      style = "";
      break;
    }
    case "Mac": {
      style = "";
      break;
    }
    case "AirPods": {
      style = "mb:h-[258px] sm:h-[550px] lg:h-[778px]";
      break;
    }
    case "Watch": {
      style = "mb:h-[66px] sm:h-[130px] lg:h-[190px]";
      break;
    }
    default:
      break;
  }
  return (
    <div className={`${style} mb-[50px] `}>
      <img
        src={srcImg}
        alt="imageBrand"
        className={`${
          slug === "Watch"
            ? "w-full h-full object-cover"
            : "rounded-3xl w-full h-full object-cover"
        }`}
      />
    </div>
  );
};

export default BannerNav;
