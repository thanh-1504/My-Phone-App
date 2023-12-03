import React from "react";
import { NavLink } from "react-router-dom";
const products = [
  { name: "iPhone", url: "/products/iPhone" },
  { name: "iPad", url: "/products/iPad" },
  { name: "Mac", url: "/products/Mac" },
  { name: "AirPods", url: "/products/AirPods" },
  { name: "Watch", url: "/products/Watch" },
];
const ListProduct = () => {
  return (
    <div className="h-10 mb:bg-white lg:bg-black mb:block mb:relative mb:z-[70] lg:mr-10 lg:mt-2 mb:mt-5 mb:shadow-lg lg:shadow-none">
      {products.map((item) => (
        <NavLink to={item.url} key={item.url}>
          <span className="mb:text-black mb:pt-[8px] inline-block text-sm mb:pr-5 mb:pl-[1.55rem] lg:text-white lg:text-base lg:leading-[1rem]">
            {item.name}
          </span>
        </NavLink>
      ))}
    </div>
  );
};

export default ListProduct;
