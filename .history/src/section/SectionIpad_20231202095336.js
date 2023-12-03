import SeeAllProduct from "../common/SeeAllProduct";
import React, { useEffect } from "react";
import ProductsItem from "../components/ProductsItem";
import LayoutProduct from "../layouts/LayoutProduct";
import Brand from "../components/Brand";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { handleGetData } from "../reux-thunk/Slice/handler";
import { Autoplay } from "swiper/modules";
import { v4 } from "uuid";
const SectionIpad = () => {
  const dispatch = useDispatch();
  const { dataIpad } = useSelector((state) => state.iPad);
  const { dataMainPage } = dataIpad;
  const width = window.innerWidth;
  useEffect(() => {
    dispatch(handleGetData());
  }, [dispatch]);
  if (!dataMainPage || !dataIpad) return;
  const data = dataMainPage[1].sectionIpad;
  return (
    <section className="iPad">
      <Brand nameBrand="iPad"></Brand>
      <LayoutProduct>
       
      </LayoutProduct>
      <SeeAllProduct nameBrand="iPad">Xem tất cả iPad</SeeAllProduct>
    </section>
  );
};

export default SectionIpad;
