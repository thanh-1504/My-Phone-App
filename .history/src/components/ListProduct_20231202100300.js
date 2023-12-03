import React from "react";
import { NavLink } from "react-router-dom";
const products = [
  { name: "iPhone", url: "/products/iPhone" },
  { name: "iPad", url: "/products/iPad" },
  { name: "Mac", url: "/products/Mac" },
  { name: "AirPods", url: "/products/AirPods" },
  { name: "Watch", url: "/products/Watch" },
];
/**
 * mb:pt-[10px]
 * ${
              width < 400 ? "mb:pl-[1.2rem]" : "mb:pl-[1.55rem]"
            }  lg:text-white lg:text-base lg:leading-[1rem] ${width === 320 && "mb:pr-[0.25rem]"}
 */
const ListProduct = () => {
  const width = window.innerWidth;
  return (
    <div className="h-10 mb:bg-white lg:bg-black mb:block mb:relative mb:z-[70] lg:mr-10 lg:mt-2 mb:mt-5 mb:shadow-lg lg:shadow-none">
      {products.map((item) => (
        <NavLink to={item.url} key={item.url}>
          <span
            className={`mb:text-black  inline-block text-sm mb:pr-5 `}
          >
            {item.name}
          </span>
        </NavLink>
      ))}
    </div>
  );
};

export default ListProduct;
