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
  const width = window.innerWidth;
  return (
    <div className="h-10 mb:bg-white lg:bg-black mb:relative mb:z-[70] lg:mr-10 lg:mt-2 mb:mt-5 mb:shadow-lg lg:shadow-none flex items-center justify-evenly">
      {products.map((item) => (
        <NavLink to={item.url} key={item.url}>
          <span
            className={`mb:text-black inline-block text-sm mb:pr-5 lg:text-white lg:text-base lg:leading-[1rem] `}
          >
            {item.name}
          </span>
        </NavLink>
      ))}
    </div>
  );
};

export default ListProduct;
