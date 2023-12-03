import React, { useEffect } from "react";
import ImageItem from "./ImageItem";
import { useDispatch, useSelector } from "react-redux";
import { filterProduct } from "../reux-thunk/Slice/iPhoneSlice";

const ProductsItem = ({ srcImg = "", style = "", data }) => {
  const dispatch = useDispatch();
  const { dataIp, dataFilter } = useSelector((state) => state.iPhone);
  const { dataMainPage } = useSelector((state) => state.global);
  useEffect(() => {
    // dispatch(filterProduct(dataIp[0].series15.slice(0, 2)));
  }, [dispatch]);
  console.log(data);
  return (
    {data.map(item => (
      
    ))}
   
  );
};

export default ProductsItem;
