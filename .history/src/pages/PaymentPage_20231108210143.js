import React from "react";
import PaymentHeader from "../components/payment/PaymentHeader";
import LayoutPayment from "../layouts/LayoutPayment";
import PaymentInfoProduct from "../components/payment/PaymentInfoProduct";
import PaymentInfoBuyer from "../components/payment/PaymentInfoBuyer";
import PaymentRequestOrder from "../components/payment/PaymentRequestOrder";
import PaymentConfirmOrder from "../components/payment/PaymentConfirmOrder";
const PaymentPage = () => {
  return (
    <div>
      <div className="z-50 modal bg-black/40">
        <div className="modal-content w-[895px] h-[450px]  overflow-y-auto overflow-x-hidden ">
          <PaymentHeader onDevice={{ mobile: false, pc: true }}></PaymentHeader>
          <form autoComplete="off">
            <LayoutPayment>
              <PaymentInfoProduct></PaymentInfoProduct>
              <PaymentInfoBuyer></PaymentInfoBuyer>
              <PaymentRequestOrder></PaymentRequestOrder>
              <PaymentConfirmOrder></PaymentConfirmOrder>
            </LayoutPayment>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
