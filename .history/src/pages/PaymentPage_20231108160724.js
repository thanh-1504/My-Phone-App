import React from "react";
import LayoutPage from "../layouts/LayoutPage";
import Header from "../components/Header";

const PaymentPage = () => {
  return (
    <div>
      <div className="fixed inset-0 w-screen h-screen modal">
        <div className="fixed inset-0 w-screen h-screen bg-gray-700 overplay"></div>
        <div className="absolute modal__content top-[40%] left-[50%] translate-x-2/4 translatey-2/"></div>
      </div>
    </div>
  );
};

export default PaymentPage;
