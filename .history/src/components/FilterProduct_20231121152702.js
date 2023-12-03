import React from "react";
import { Link } from "react-router-dom";
const test = [
  { name: "iPhone 15", brand: "iPhone", path: "filter/iPhone15" },
  { name: "iPhone 14", brand: "iPhone", path: "filter/iPhone14" },
  { name: "iPhone 13", brand: "iPhone", path: "filter/iPhone13" },
  { name: "iPhone 12", brand: "iPhone", path: "filter/iPhone12" },
  { name: "iPhone 11", brand: "iPhone", path: "filter/iPhone11" },
  { name: "iPad ", brand: "iPad", path: "filter/iPad" },
  { name: "iPad Air", brand: "iPad", path: "filter/iPadAir" },
  { name: "iPad Pro", brand: "iPad", path: "filter/iPadPro" },
  { name: "iPad Mini", brand: "iPad", path: "filter/iPadMini" },
  { name: "iPad Pro M1", brand: "iPad", path: "filter/iPadProM1" },
  { name: "iMac", brand: "Mac", path: "filter/iMac" },
  { name: "MacBook Air", brand: "Mac", path: "filter/macAir" },
  { name: "MacBook Pro", brand: "Mac", path: "filter/macPro" },
  { name: "MacBook Pro 2021", brand: "Mac", path: "filter/macPro2021" },
  { name: "Mac Mini 2020", brand: "Mac", path: "filter/macMini" },
  { name: "MacBook M3 Max", brand: "Mac", path: "filter/macM3Max" },
  { name: "Apple Watch Series 3", brand: "Watch", path: "filter/series3" },
  { name: "Apple Watch Series 5", brand: "Watch", path: "filter/series5" },
  { name: "Apple Watch Series 6", brand: "Watch", path: "filter/series6" },
  { name: "Apple Watch Series 7", brand: "Watch", path: "filter/series7" },
  { name: "Apple Watch Series SE", brand: "Watch", path: "filter/seriesSE" },
];
const FilterProduct = ({ slug = "" }) => {
  const data = test.filter((item) => item.brand === slug);
  let style = "";
  switch (slug) {
    case "iPhone": {
      style = "mb:h-[216px] lg:h-[618px] max-w-[1100px]";
      break;
    }
    case "iPad": {
      style = "mb:h-[96px] lg:h-[275px] max-w-[1100px]";
      break;
    }
    case "Mac": {
      style = "mb:h-[96px] lg:h-[275px] max-w-[1100px]";
      break;
    }
    case "AirPods": {
      style = "mb:h-[258px] lg:h-[778px] max-w-[1100px]";
      break;
    }
    case "Watch": {
      style = "mb:h-[66px] lg:h-[190px] max-w-[1100px]";
      break;
    }
    default:
      break;
  }
  return (
    <div className="filter-wrap ">
      <div className=" mb:flex mb:whitespace-nowrap mb:overflow-x-auto lg:justify-center lg:mt-10 items-center">
        <span className="text-white font-bold">Tất cả</span>
        {data.map((item) => (
          <Link className="text-sm font-medium text-white mb:py-[7px] mb:px-[30px] mb:mr-4 mb:mb-3 mb:tracking-[2px] cursor-pointer transition-all w-[110px] h-[35px]">
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FilterProduct;
