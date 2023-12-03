/* eslint-disable react/style-prop-object */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import PaymentHeader from "../components/payment/PaymentHeader";
import LayoutPayment from "../layouts/LayoutPayment";
import PaymentPriceAndQuantity from "../components/payment/PaymentPriceAndQuantity";
import PaymentPrice from "../components/payment/PaymentPrice";
import PaymentInfoBuyer from "../components/payment/PaymentInfoBuyer";
import PaymentRequestOrder from "../components/payment/PaymentRequestOrder";
import PaymentConfirmOrder from "../components/payment/PaymentConfirmOrder";
const PaymentOnMobilePage = () => {
  return (
    <div>
      <PaymentHeader onDevice={{ mobile: true, pc: false }}></PaymentHeader>
      <form autoComplete="off">
        <LayoutPayment style="px-[200px] py-3 bg-[#ebf4f8] ">
          <div className="bg-white rounded-t-lg">
            <div className="flex items-center">
              <img
                className="w-[83px] h-[88px] object-cover mr-4 ml-6"
                src="https://www.bihouse.vn/img_data/images/513311110185-zyro-image-(2).png"
                alt=""
              />
              <p className="font-medium">iPhone 15 Pro Max</p>
              <PaymentPriceAndQuantity></PaymentPriceAndQuantity>
            </div>
            <PaymentPrice></PaymentPrice>
          </div>
          <PaymentInfoBuyer></PaymentInfoBuyer>
          <PaymentRequestOrder></PaymentRequestOrder>
          <PaymentConfirmOrder></PaymentConfirmOrder>
          <div className="pt-6 pb-12 text-center">
            <button className="w-[265px] h-[45px] bg-[#006d9c] text-white font-medium rounded-lg hover:scale-x-105 hover:scale-y-105 ease-in duration-100">
              Xác nhận đặt hàng
            </button>
          </div>
        </LayoutPayment>
      </form>
    </div>
  );
};

export default PaymentOnMobilePage;
