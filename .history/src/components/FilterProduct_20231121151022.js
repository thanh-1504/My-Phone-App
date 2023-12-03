import React from "react";
import { Link } from "react-router-dom";
const test = [
  { name: "iPhone 15", brand: "iPhone" },
  { name: "iPhone 14", brand: "iPhone" },
  { name: "iPhone 13", brand: "iPhone" },
  { name: "iPhone 12", brand: "iPhone" },
  { name: "iPhone 11", brand: "iPhone" },
];
const FilterProduct = ({slug}) => {
  return (
    <div className="filter-wrap ">
      <div className=" mb:flex mb:whitespace-nowrap mb:overflow-x-auto lg:justify-center lg:mt-10 items-center">
        <span className="text-white font-bold">Tất cả</span>
        {test.map((item) => (
          <Link className="text-sm font-medium text-white mb:py-[7px] mb:px-[30px] mb:mr-4 mb:mb-3 mb:tracking-[2px] cursor-pointer transition-all w-[110px] h-[35px]">
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FilterProduct;
