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
  {name:"iMac", brand: "Mac",path:"/filter/iMac"},
  {name:"MacBook Air", brand: "Mac",path:"/filter/macAir"},
  {name:"MacBook Pro", brand: "Mac",path:"/filter/macPro"},
  {name:"Mac Mini 2020", brand: "Mac",path:"/filter/macMini"},
  {name:"MacBook ", brand: "Mac",path:"/filter/iMac"},
  {name:"iMac", brand: "Mac",path:"/filter/iMac"},
];
const FilterProduct = ({ slug = "" }) => {
  const data = test.filter((item) => item.brand === slug);
  console.log(data);
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
