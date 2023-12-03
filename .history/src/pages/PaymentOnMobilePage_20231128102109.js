/* eslint-disable react/style-prop-object */
import React from "react";
import PaymentRequestOrder from "../components/payment/PaymentRequestOrder";
import PaymentPriceAndQuantity from "../components/payment/PaymentPriceAndQuantity";
import PaymentPrice from "../components/payment/PaymentPrice";
import PaymentInfoBuyer from "../components/payment/PaymentInfoBuyer";
import PaymentHeader from "../components/payment/PaymentHeader";
import PaymentConfirmOrder from "../components/payment/PaymentConfirmOrder";
import LayoutPayment from "../layouts/LayoutPayment";
const PaymentOnMobilePage = () => {
  return (
    <div>
      <PaymentHeader onDevice={{ mobile: true, pc: false }}></PaymentHeader>
      <form autoComplete="off">
        <LayoutPayment style=" bg-[#ebf4f8] ">
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
        </LayoutPayment>
      </form>
    </div>
  );
};

export default PaymentOnMobilePage;
