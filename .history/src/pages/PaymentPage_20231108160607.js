import React from "react";
import LayoutPage from "../layouts/LayoutPage";
import Header from "../components/Header";

const PaymentPage = () => {
  return (
    <div>
      <div className="fixed inset-0 w-screen h-screen modal">
        <div className="fixed inset-0 w-screen h-screen overplay bg-rg"></div>
        <div className="modal__content"></div>
      </div>
    </div>
  );
};

export default PaymentPage;
