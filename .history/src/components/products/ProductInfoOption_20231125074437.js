import React from "react";
import { useSelector } from "react-redux";

const ProductInfoOption = ({ dataOption = "" }) => {
  const { data } = useSelector((state) => state.detailSlice);
  if (!data[0]) return;
  const { price } = data[0];
  // const { price, capacity } = data;
  console.log(dataOption);
  // if (!price || !capacity) return;
  return (
    <div className="mb:mt-4 lg:mt-0">
      <p className="text-[#5dd673] uppercase font-medium">[Hàng có sẵn]</p>
      <p className="text-[#a6b3bb]">
        {dataOption.price ? price : dataOption.price} -
        <span className="text-[#ed1c23] font-bold">{dataOption.capacity}</span>
      </p>
      {dataOption.price ? <p className="text-[#a6b3bb]">
        { price } -
      </p>:  <p className="text-[#a6b3bb]">
        {dataOption.price ? price : dataOption.price} -
        <span className="text-[#ed1c23] font-bold">{dataOption.capacity}</span>
      </p>}
      <p className="text-[#e2861e] mb:mt-4 lg:mt-6 font-bold mb:mb-4 "></p>
      <p className="uppercase text-[#5dd673] font-medium mb:mb-6 lg:mb-6">
        mở rộng đổi + 2 năm
      </p>
    </div>
  );
};

export default ProductInfoOption;
