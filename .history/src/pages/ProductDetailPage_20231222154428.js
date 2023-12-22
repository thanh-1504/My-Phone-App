/* eslint-disable react/style-prop-object */
import React, { useEffect } from "react";
import { v4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  handleFetchOtherProducts,
  handleGetDataById,
  handleGetDetailDataProduct,
} from "../reux-thunk/Slice/handler";
import { handleBuyProduct } from "../reux-thunk/Slice/paymentSlice";
import LayoutPage from "../layouts/LayoutPage";
import Header from "../components/header/Header";
import LayoutOfBanner from "../layouts/LayoutOfBanner";
import BannerOfProducts from "../common/BannerOfProducts";
import PaymentPage from "./PaymentPage";
import Border from "../common/Border";
import SpecificationText from "../components/warranty/SpecificationText";
import SpecificationTable from "../components/warranty/SpecificationTable";
import NameProduct from "../components/products/NameProduct";
import OptionProduct from "../components/products/OptionProduct";
import WarrantyText from "../common/WarrantyText";
import Button from "../components/button/Button";
import TextHeading from "../common/TextHeading";
import ProductsItem from "../components/productItem/ProductsItem";
import Footer from "../components/footer/Footer";
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
      <div className="mb:px-[15px] md:px-10 sm:px-5 ">
        <div
          className={`${
            widthScreen >= 1280
              ? "flex w-full lg:pt-[80px]"
              : "overflow-x-hidden mb-[60px]"
          }`}
        >
          <div>
            <LayoutOfBanner style="mb:pt-[75px]">
              <BannerOfProducts
                dataImg={dataOption[0]?.listImg}
              ></BannerOfProducts>
            </LayoutOfBanner>
            {widthScreen >= 768 && (
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
              } md:w-full sm:w-full`}
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
              } md:text-[28px] sm:text-[28px]`}
            >
              {data[0]?.name}
            </NameProduct>
            <div className={`${widthScreen >= 1280 && "lg:mt-10"} `}>
              <OptionProduct data={dataOption}></OptionProduct>
              <Border
                style={`${
                  widthScreen >= 1280
                    ? "mb:mt-4 mb:pt-5 lg:w-[380px] lg:mt-[30px] "
                    : "mb:mt-4 mb:mb-4"
                }`}
              ></Border>
              <WarrantyText></WarrantyText>
              <Border
                style={`${
                  widthScreen >= 1280
                    ? "lg:w-[380px] lg:my-6"
                    : "mb:mt-5 mb:mb-10"
                }`}
              ></Border>
              {widthScreen >= 768 ? (
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
              widthScreen >= 1280 ? "lg:mt-[80px]" : "mb:mt-10 text-2xl"
            } md:text-[32px] mb:mb-10`}
          >
            Sản Phẩm Khác
          </TextHeading>
        )}
        <Swiper
          slidesPerView={`${widthScreen >= 1280 ? 4 : 2}`}
          loop={true}
          className={`${
            widthScreen >= 1280
              ? "swiper-wrapper-product lg:mt-[60px] lg:mb-[150px] "
              : "md:mb-[80px] md:!w-[720px] mb:mb-[60px] sm:!w-[730px]"
          } `}
          grabCursor={true}
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
              <SwiperSlide key={v4()}>
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
