/* eslint-disable react/style-prop-object */
import WarrantyText from "../common/WarrantyText";
import TextHeading from "../common/TextHeading";
import SpecificationText from "../components/SpecificationText";
import SpecificationTable from "../components/SpecificationTable";
import React, { useEffect } from "react";
import ProductsItem from "../components/ProductsItem";
import OptionProduct from "../components/products/OptionProduct";
import NameProduct from "../components/products/NameProduct";
import LayoutPage from "../layouts/LayoutPage";
import LayoutOfBanner from "../layouts/LayoutOfBanner";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/button/Button";
import Border from "../common/Border";
import BannerOfProducts from "../common/BannerOfProducts";
import { v4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import PaymentPage from "./PaymentPage";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  handleFetchOtherProducts,
  handleGetDataById,
  handleGetDetailDataProduct,
} from "../reux-thunk/Slice/handler";
import { handleBuyProduct } from "../reux-thunk/Slice/paymentSlice";
const ProductDetailPage = () => {
  const widthScreen = window.screen.width;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { slug, modelProduct, typeProduct } = useParams();
  const { dataOption } = useSelector((state) => state.option);
  const { data } = useSelector((state) => state.detailSlice);
  const { isBuyProduct } = useSelector((state) => state.payment);
  const { dataOtherProducts } = useSelector((state) => state.detailSlice);
  useEffect(() => {
    dispatch(handleGetDataById(slug));
    dispatch(handleGetDetailDataProduct(modelProduct));
    dispatch(handleFetchOtherProducts(typeProduct));
  }, [dispatch, slug, modelProduct, typeProduct]);
  if (isBuyProduct) document.body.style.overflow = "hidden";
  else document.body.style.overflow = "";
  return (
    <LayoutPage>
      <Header></Header>
      <div className="px-[15px]">
        {widthScreen >= 1280 && (
          <div>
            <div className="flex w-full lg:pt-[80px]">
              <div
                className={`${
                  widthScreen >= 1280 && `w-[${widthScreen / 2}px]`
                }`}
              >
                <LayoutOfBanner style="mb:pt-[75px]">
                  <BannerOfProducts
                    dataImg={dataOption[0]?.listImg}
                  ></BannerOfProducts>
                </LayoutOfBanner>
                <>
                  {isBuyProduct && (
                    <PaymentPage data={dataOption}></PaymentPage>
                  )}
                </>
                <Border style="lg:w-[530px] lg:ml-[45px] lg:mt-4 lg:mb-4"></Border>
                {data[0]?.TechnicalSpecifications && (
                  <SpecificationText></SpecificationText>
                )}
                <SpecificationTable
                  style="lg:ml-10 lg:w-[530px]"
                  data={data[0]?.TechnicalSpecifications}
                ></SpecificationTable>
              </div>
              <div
                className={`w-[${widthScreen / 2}px] mt-[50px] lg:ml-[80px]`}
              >
                <NameProduct style="mb:text-xl lg:text-3xl ">
                  {data[0]?.name}
                </NameProduct>
                <div className="lg:mt-10">
                  <OptionProduct data={dataOption}></OptionProduct>
                  <Border style="mb:mt-4 mb:pt-5 lg:w-[380px] lg:mt-[50px]"></Border>
                  <WarrantyText></WarrantyText>
                  <Border style="lg:w-[380px] lg:my-10"></Border>
                  <Button
                    onClick={() => dispatch(handleBuyProduct(true))}
                    style="bg-[#ee0000] w-[280px] h-[48px] rounded-lg"
                    text="Giao tận nơi hoặc nhận tại cửa hàng"
                  >
                    MUA NGAY
                  </Button>
                </div>
              </div>
            </div>
            {dataOtherProducts.length > 0 && (
              <TextHeading style="lg:mt-[80px]">Sản Phẩm Khác</TextHeading>
            )}
            <Swiper
              slidesPerView={4}
              loop={true}
              className="swiper-wrapper-product lg:mt-10 lg:mb-[150px] "
              grabCursor={true}
              momentum={true}
              speed={800}
              easing="linear"
              modules={[Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
            >
              {dataOtherProducts.length > 0 &&
                dataOtherProducts.map((dataItem) => (
                  <SwiperSlide
                    key={dataItem.imgSrc}
                    className="!w-[252px] lg:mr-[30px]"
                  >
                    <ProductsItem data={dataItem}></ProductsItem>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        )}
        {widthScreen <= 414 && (
          <div className="overflow-x-hidden mb-[60px]">
            <LayoutOfBanner style="mb:pt-[75px]">
              <BannerOfProducts
                dataImg={dataOption[0]?.listImg}
              ></BannerOfProducts>
            </LayoutOfBanner>
            <Border style="mb:mt-5 mb:mb-6"></Border>
            {data[0]?.TechnicalSpecifications && (
              <SpecificationText></SpecificationText>
            )}
            <SpecificationTable
              data={data[0]?.TechnicalSpecifications}
            ></SpecificationTable>
            <NameProduct style="text-center text-xl">
              {data[0]?.name}
            </NameProduct>
            <OptionProduct data={dataOption}></OptionProduct>
            <Border style="mb:mt-10 mb:mb-4"></Border>
            <WarrantyText></WarrantyText>
            <Border style="mb:mt-5 mb:mb-10"></Border>
            <div className="text-center">
              <Button
                style="bg-[#ee0000] w-[280px] h-[48px] rounded-lg"
                text="Giao tận nơi hoặc nhận tại cửa hàng"
                onClick={() => navigate(`/payment`)}
              >
                MUA NGAY
              </Button>
            </div>
            {dataOtherProducts.length > 0 && (
              <TextHeading style="mb:mt-10 text-2xl">
                Sản Phẩm Cùng Loại
              </TextHeading>
            )}
            <Swiper
              slidesPerView={2}
              loop={true}
              momentum={true}
              className="w-[404px] !pl-[0.38rem]"
              speed={800}
              easing="linear"
              modules={[Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
            >
              {dataOtherProducts.length > 0 &&
                dataOtherProducts.map((dataItem) => (
                  <SwiperSlide key={dataItem.imgSrc} className="!w-[197px] ">
                    <ProductsItem data={dataItem}></ProductsItem>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        )}
      </div>
      <Footer></Footer>
    </LayoutPage>
  );
};

export default ProductDetailPage;
