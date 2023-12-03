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
      <div className="px-[15px] md:px-10 ">
        <div
          className={`${
            widthScreen >= 1280
              ? "flex w-full lg:pt-[80px]"
              : "overflow-x-hidden mb-[60px]"
          }`}
        >
          <div
            className={`${widthScreen >= 1280 && `w-[${widthScreen / 2}px]`}`}
          >
            <LayoutOfBanner style="mb:pt-[75px]">
              <BannerOfProducts
                dataImg={dataOption[0]?.listImg}
              ></BannerOfProducts>
            </LayoutOfBanner>
            {widthScreen >= 1280 && (
              <>
                {isBuyProduct && <PaymentPage data={dataOption}></PaymentPage>}
              </>
            )}
            <Border
              style={`${
                widthScreen >= 1280
                  ? "lg:w-[530px] lg:ml-[45px] lg:mt-4 lg:mb-4"
                  : "mb:mt-5 mb:mb-6"
              }`}
            ></Border>
            {data[0]?.TechnicalSpecifications && (
              <SpecificationText></SpecificationText>
            )}
            <SpecificationTable
              style={`${
                widthScreen >= 1280 && "lg:ml-10 lg:w-[530px]"
              } md:w-full`}
              data={data[0]?.TechnicalSpecifications}
            ></SpecificationTable>
          </div>
          <div
            className={`${
              widthScreen >= 1280 &&
              `w-[${widthScreen / 2}px] mt-[50px] lg:ml-[80px]`
            }`}
          >
            <NameProduct
              style={`${
                widthScreen >= 1280
                  ? "mb:text-xl lg:text-3xl "
                  : "text-center text-xl"
              } md:text-[28px]`}
            >
              {data[0]?.name}
            </NameProduct>
            <div className={`${widthScreen >= 1280 && "lg:mt-10"} `}>
              <OptionProduct data={dataOption}></OptionProduct>
              <Border
                style={`${
                  widthScreen >= 1280
                    ? "mb:mt-4 mb:pt-5 lg:w-[380px] lg:mt-[50px] "
                    : "mb:mt-10 mb:mb-4"
                }`}
              ></Border>
              <WarrantyText></WarrantyText>
              <Border
                style={`${
                  widthScreen >= 1280
                    ? "lg:w-[380px] lg:my-10 "
                    : "mb:mt-5 mb:mb-10"
                }`}
              ></Border>
              {widthScreen >= 1280 ? (
                <Button
                  onClick={() => dispatch(handleBuyProduct(true))}
                  style="bg-[#ee0000] w-[280px] h-[48px] rounded-lg"
                  text="Giao tận nơi hoặc nhận tại cửa hàng"
                >
                  MUA NGAY
                </Button>
              ) : (
                <div className="text-center">
                  <Button
                    style="bg-[#ee0000] w-[280px] h-[48px] rounded-lg"
                    text="Giao tận nơi hoặc nhận tại cửa hàng"
                    onClick={() => navigate(`/payment`)}
                  >
                    MUA NGAY
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
        {dataOtherProducts.length > 0 && (
          <TextHeading
            style={`${
              widthScreen >= 1280 ? "lg:mt-[80px] " : "mb:mt-10 text-2xl"
            } md:text-[32px]`}
          >
            Sản Phẩm Khác
          </TextHeading>
        )}
        <Swiper
          slidesPerView={`${widthScreen >= 1280 ? 4 : 2}`}
          loop={true}
          className={`${
            widthScreen >= 1280
              ? "swiper-wrapper-product lg:mt-10 lg:mb-[150px] "
              : "w-[404px] !pl-[0.38rem] md:mb-[80px] md:"
          } `}
          grabCursor={true}
          momentum={true}
          speed={800}
          easing="linear"
          // modules={[Autoplay]}
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
                className={`${
                  widthScreen >= 1280
                    ? "!w-[252px] lg:mr-[30px] "
                    : "mb:!w-[197px] md:!w-[350px]"
                }`}
              >
                <ProductsItem data={dataItem}></ProductsItem>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <Footer></Footer>
    </LayoutPage>
  );
};

export default ProductDetailPage;
