import React, { useEffect } from "react";
import PaymentRequestOrder from "../components/payment/PaymentRequestOrder";
import PaymentInfoProduct from "../components/payment/PaymentInfoProduct";
import PaymentInfoBuyer from "../components/payment/PaymentInfoBuyer";
import PaymentHeader from "../components/payment/PaymentHeader";
import PaymentConfirmOrder from "../components/payment/PaymentConfirmOrder";
import LayoutPayment from "../layouts/LayoutPayment";
import { useDispatch, useSelector } from "react-redux";
import { handleFetchProvince } from "../reux-thunk/Slice/handler";
const PaymentPage = ({ data }) => {
  const { dataPayment } = useSelector((state) => state.option);
  const { isBuyProduct, dataProvince } = useSelector((state) => state.payment);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(handleFetchProvince());
  }, [dispatch]);
  if (!data || !dataOption) return;
  console.log(dataProvince);
  return (
    <div>
      <div className={`z-50 modal bg-black/40`}>
        <div className="modal-content w-[895px] h-[450px]  overflow-y-auto overflow-x-hidden">
          <PaymentHeader onDevice={{ mobile: false, pc: true }}></PaymentHeader>
          <form autoComplete="off">
            <LayoutPayment>
              <PaymentInfoProduct
                dataPay={{ data, dataPayment }}
              ></PaymentInfoProduct>
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
