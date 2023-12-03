import React from "react";
import { Link, useParams } from "react-router-dom";
const FilterProduct = ({ slug = "", data }) => {
  const { typeProduct } = useParams();
  const filterBrand = data?.filter((item) => item.brand === typeProduct);
  if (!filterBrand) return;
  let style = "";
  switch (slug) {
    case "iPhone":
    case "iPad": {
      style =
        "text-sm font-medium text-white mb:py-[7px] mb:px-[30px] mb:mr-4 mb:mb-3 mb:tracking-[2px] cursor-pointer transition-all w-[110px] h-[35px]";
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
  console.log(filterBrand, slug);
  return (
    <div className="filter-wrap ">
      <div className=" mb:flex mb:whitespace-nowrap mb:overflow-x-auto lg:pl-[46px] lg:mt-10 items-center">
        <span className="text-white font-bold mb-3">Tất cả (15)</span>
        {filterBrand.map((item) => (
          <Link to={item.path} className={`${style}`}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FilterProduct;
