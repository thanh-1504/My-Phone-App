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
import ImageItem from "../components/ImageItem";
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
  handleGetDataById,
  handleGetDetailDataProduct,
} from "../reux-thunk/Slice/handler";
import { handleBuyProduct } from "../reux-thunk/Slice/paymentSlice";
const test = [{}, {}, {}, {}, {}];
const ProductDetailPage = () => {
  const widthScreen = window.screen.width;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { slug, modelProduct } = useParams();
  const { dataOption } = useSelector((state) => state.option);
  const { data } = useSelector((state) => state.detailSlice);
  const { isBuyProduct } = useSelector((state) => state.payment);
  const { dataFilter } = useSelector((state) => state.nav);
  const { typeProduct, slug } = useParams();

  useEffect(() => {
    dispatch(handleGetDataById(slug));
    dispatch(handleGetDetailDataProduct(modelProduct));
  }, [dispatch, slug, modelProduct]);
  if (!data || !dataOption) return;
  console.log(dataFilter);
  return (
    <LayoutPage>
      <Header></Header>
      <div className="px-[15px]">
        {widthScreen >= 1280 && (
          <div>
            <div className="flex w-full lg:pt-[120px]">
              <div className={`w-[${widthScreen / 2}px]`}>
                <LayoutOfBanner style="mb:pt-[75px]">
                  <BannerOfProducts
                    dataImg={dataOption[0]?.listImg}
                  ></BannerOfProducts>
                </LayoutOfBanner>
                <div>
                  {isBuyProduct && (
                    <PaymentPage data={dataOption}></PaymentPage>
                  )}
                </div>
                <Border style="lg:w-[530px] lg:ml-[45px] lg:mt-4 lg:mb-4"></Border>
                <SpecificationText></SpecificationText>
                <SpecificationTable
                  style="lg:ml-10 lg:w-[530px]"
                  data={data[0]?.TechnicalSpecifications}
                ></SpecificationTable>
              </div>
              <div className={`w-[${widthScreen / 2}px] mt-[40px] lg:p-[50px]`}>
                <NameProduct style="text-center mb:text-xl lg:text-3xl ">
                  {data[0]?.name}
                </NameProduct>
                <div className="lg:mt-10">
                  <OptionProduct data={dataOption}></OptionProduct>
                  <Border style="mb:mt-4 mb:pt-5 lg:w-[380px] lg:mt-[50px]"></Border>
                  <WarrantyText></WarrantyText>
                  <Border style="lg:w-[380px] lg:my-10"></Border>
                  <div className="text-center translate-x-[-10px]">
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
            </div>
            <TextHeading style="lg:mt-[80px]">Sản Phẩm Cùng Loại</TextHeading>
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
              {test.map((slide) => (
                <SwiperSlide
                  key={slide.imgSrc}
                  className="!w-[252px] lg:mr-[30px]"
                >
                  <ProductsItem srcImg="https://www.bihouse.vn/img_data/images/587378764910-iPhone-14-Pro-series-2-650x650-1.png"></ProductsItem>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
        {widthScreen <= 414 && (
          <div>
            <LayoutOfBanner style="mb:pt-[75px] w-">
              <BannerOfProducts
                dataImg={dataOption[0]?.listImg}
              ></BannerOfProducts>
            </LayoutOfBanner>
            <Border style="mb:mt-5 mb:mb-6"></Border>
            <SpecificationText></SpecificationText>
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
            <TextHeading style="mb:mt-10 text-2xl">
              Sản Phẩm Cùng Loại
            </TextHeading>
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
              {test.map(() => (
                <SwiperSlide key={v4()} className="!w-[197px] ">
                  <ProductsItem srcImg="https://www.bihouse.vn/img_data/images/587378764910-iPhone-14-Pro-series-2-650x650-1.png"></ProductsItem>
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
