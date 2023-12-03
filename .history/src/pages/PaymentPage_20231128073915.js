import React, { useEffect, useState } from "react";
import PaymentRequestOrder from "../components/payment/PaymentRequestOrder";
import PaymentInfoProduct from "../components/payment/PaymentInfoProduct";
import PaymentInfoBuyer from "../components/payment/PaymentInfoBuyer";
import PaymentHeader from "../components/payment/PaymentHeader";
import PaymentConfirmOrder from "../components/payment/PaymentConfirmOrder";
import LayoutPayment from "../layouts/LayoutPayment";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import {
  handleFetchProvince,
  handlerFetchDistrict,
} from "../reux-thunk/Slice/handler";
import { handleShow } from "../reux-thunk/Slice/paymentSlice";
const PaymentPage = ({ data }) => {
  const { dataPayment } = useSelector((state) => state.option);
  const [idProvince, setIdProvince] = useState("");
  const [showDistrict, setshowDistrict] = useState(false);
  const { showAddress } = useSelector((state) => state.payment);
  const { isBuyProduct, dataProvince, dataDistrict } = useSelector(
    (state) => state.payment
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleFetchProvince());
    dispatch(handlerFetchDistrict(idProvince));
  }, [dispatch, idProvince]);
  console.log(showAddress);
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
              {/* <PaymentRequestOrder
                dataProvince={dataProvince}
              ></PaymentRequestOrder> */}
              <section>
                <div className="px-8 py-6 pt-6 mt-3 bg-white rounded-lg">
                  <span>Yêu cầu nhận hàng</span>
                  <div className="flex items-center mt-3">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="input__request"
                        id="request_order"
                        className="mt-1 mr-[6px]"
                      />
                      <label
                        className="text-sm font-medium select-none"
                        htmlFor="request_order"
                      >
                        Nhận hàng tại nhà
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col w-[395px] mt-5">
                    <label className="mb-3 text-sm font-medium">
                      Tỉnh / Thành phố
                    </label>
                    <div>
                      <div
                        onClick={() => dispatch(handleShow(!show))}
                        className="w-[786px] cursor-pointer flex items-center"
                      >
                        <span className="text-sm text-[#e3e0de] mb-1">
                          Chọn Tỉnh / Thành Phố
                        </span>
                        <FontAwesomeIcon
                          icon={faCaretDown}
                          className="ml-auto cursor-pointer"
                        />
                      </div>
                      <div className="w-[786px] h-[0.5px] bg-[#ced4da]"></div>
                      {show && (
                        <div className="max-w-[780px] border border-[#ced4da] w-[786px] relative top-[-10px] mt-5">
                          <ul className="list-country list-none max-h-[10em] overflow-y-auto w-[786px]">
                            {dataProvince.map((item) => {
                              return (
                                <li
                                  onClick={() => {
                                    dispatch(handleShow(false));
                                    setIdProvince(item.province_id);
                                  }}
                                  className="cursor-pointer py-[5px] hover:bg-blue-500 hover:text-white pl-2"
                                >
                                  {item.province_name}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      )}
                    </div>
                    <label className="mb-3 text-sm font-medium mt-3">
                      Quận / Huyện
                    </label>
                    <div>
                      <div
                        onClick={() => setshowDistrict(!showDistrict)}
                        className="w-[786px] cursor-pointer flex items-center"
                      >
                        <span className="text-sm text-[#e3e0de] mb-1">
                          Chọn Quận / Huyện
                        </span>
                        <FontAwesomeIcon
                          icon={faCaretDown}
                          className="ml-auto cursor-pointer"
                        />
                      </div>
                      <div className="w-[786px] h-[0.5px] bg-[#ced4da]"></div>
                      {showDistrict && (
                        <div className="max-w-[780px] border border-[#ced4da] w-[786px] relative top-[-10px] mt-5">
                          <ul className="list-country list-none max-h-[10em] overflow-y-auto w-[786px]">
                            {dataDistrict.length > 0 &&
                              dataDistrict.map((item) => {
                                return (
                                  <li
                                    onClick={() => {
                                      dispatch(handleShow(false));
                                      setIdProvince(item.province_id);
                                    }}
                                    className="cursor-pointer py-[5px] hover:bg-blue-500 hover:text-white pl-2"
                                  >
                                    {item.district_name}
                                  </li>
                                );
                              })}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col w-[395px] mt-5">
                    <label
                      htmlFor="input__note"
                      className="text-sm font-medium"
                    >
                      Ghi chú
                    </label>
                    <input
                      type="text"
                      name="input__note"
                      id="input__note"
                      className="w-[786px] input--payment placeholder:text-sm placeholder:text-[#dfe0e3] mt-2 focus:border-b-[#80bdff] ease-linear duration-75"
                      placeholder="Điền ghi chú"
                    />
                  </div>
                </div>
              </section>
              <PaymentConfirmOrder></PaymentConfirmOrder>
            </LayoutPayment>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
