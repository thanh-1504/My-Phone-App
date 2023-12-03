import React from "react";
import { Link } from "react-router-dom";
const FilterProduct = ({ slug = "", data }) => {
  const filterBrand = data?.filter((item) => item.brand === slug);
  console.log(filterBrand?.length);
  if (!filterBrand) return;
  let style = "";
  switch (slug) {
    case "iPhone":
    case "iPad": {
      style =
        "text-sm font-medium text-white mb:py-[7px] mb:px-[30px] mb:mr-4 mb:mb-3 mb:tracking-[2px] cursor-pointer transition-all  h-[35px]";
      break;
    }
    case "Mac": {
      style =
        "text-sm font-medium text-white mb:py-[7px] mb:px-[30px] mb:mr-4 mb:mb-3 mb:tracking-[2px] cursor-pointer transition-all max-w-[180px] lg:pr-2";
      break;
    }
    case "Watch": {
      style =
        "text-sm font-medium text-white mb:py-[7px] mb:px-[30px] mb:mr-4 mb:mb-3 mb:tracking-[2px] cursor-pointer transition-all max-w-[180px] lg:pr-3";
      break;
    }
    default:
      break;
  }
  return (
    <div className="filter-wrap ">
      <div className=" mb:flex mb:whitespace-nowrap mb:overflow-x-auto lg:pl-[46px] lg:mt-10 items-center">
        <span className="text-white font-bold mb-3 lg:mr-4">Tất cả (15)</span>
        {filterBrand.map((item) => (
          <Link
            to={`/products/${item.brand}/${item.slugFilter}`}
            className={`${style}`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FilterProduct;
