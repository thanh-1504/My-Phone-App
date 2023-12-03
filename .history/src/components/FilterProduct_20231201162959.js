import React from "react";
import { Link } from "react-router-dom";
const FilterProduct = memo(({ slug = "", data, total = 0 }) => {
  const filterBrand = data?.filter((item) => item.brand === slug);
  if (!filterBrand) return;
  let style = "";
  switch (slug) {
    case "iPhone":
    case "iPad": {
      style =
        "text-sm font-medium text-white mb:py-[7px] mb:px-[30px] mb:mr-0 mb:mb-3 mb:tracking-[2px] cursor-pointer transition-all h-[35px] mb:mt-5 max-w-[110px]";
      break;
    }
    case "Mac": {
      style =
        "text-sm font-medium text-white mb:py-[7px] mb:px-[30px] mb:mr-4 mb:mb-3 mb:tracking-[2px] cursor-pointer transition-all max-w-[170px] lg:pr-2 mb:mt-5";
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
        <span className="text-white font-bold mb-3 lg:mr-4 mb:mt-4 mb:mr-3">
          Tất cả ({total})
        </span>
        {filterBrand.map((item) => (
          <a
            href={`/products/${item.brand}/${item.slugFilter}`}
            className={`${style}`}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
});

export default FilterProduct;
