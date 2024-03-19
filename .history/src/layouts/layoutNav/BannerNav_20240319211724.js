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
      style = "";
      break;
    }
    case "Watch": {
      style = "";
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
