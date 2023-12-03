import React, { useEffect, useState } from "react";
import PaymentInfoProduct from "../components/payment/PaymentInfoProduct";
import PaymentInfoBuyer from "../components/payment/PaymentInfoBuyer";
import PaymentHeader from "../components/payment/PaymentHeader";
import PaymentConfirmOrder from "../components/payment/PaymentConfirmOrder";
import LayoutPayment from "../layouts/LayoutPayment";

import { faCaretDown, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  handleFetchProvince,
  handleFetchWard,
  handlerFetchDistrict,
} from "../reux-thunk/Slice/handler";
import {
  handleBuyProduct,
  handleShowDistricts,
  handleShowProvinces,
  handleShowWards,
} from "../reux-thunk/Slice/paymentSlice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup.object({
  name: yup.string().required("Vui lòng nhập tên của bạn"),
  email: yup.string().email().required("Vui lòng nhập email của bạn"),
  phoneNumber: yup
    .number()
    .min(10, "Vui lòng nhập số điện thoại có ít nhất 10 số")
    .required("Vui lòng nhập số điện thoại")
    .typeError("Vui lòng nhập số không nhập chữ"),
});
const PaymentPage = ({ data }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const { dataPayment } = useSelector((state) => state.option);
  const [idProvince, setIdProvince] = useState("");
  const [labelProvince, setLabelProvince] = useState("");
  const [labelDistrict, setLabelDistrics] = useState("");
  const [labelWard, setLabelWard] = useState("");
  const [idDistrict, setIdDistrict] = useState("");
  const { showProvince, showDistrict, showWards } = useSelector(
    (state) => state.payment
  );
  const { dataProvince, dataDistrict, dataWards } = useSelector(
    (state) => state.payment
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleFetchProvince());
    dispatch(handlerFetchDistrict(idProvince));
    dispatch(handleFetchWard(idDistrict));
  }, [dispatch, idProvince, idDistrict]);
  const handleSubmitFormPayment = (values) => {};
  if (isSubmitSuccessful) {
    Swal.fire({
      title: "Đặt hàng thành công",
      iconHtml:'<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>',
      customClass: {icon},
      html: `
      <div >
      <h2 className="text-red-500">Thông tin đơn hàng</h2>
      <span>Thông tin giao hàng</span>
      <div>
        <p>Họ tên: Dương Nhật Thành</p>
        <p>Số điện thoại: 0562407343</p>
        <p>Địa chỉ: 131/3 minh phụng p9 q6</p>
      </div>
      <p>Phương thức thanh toán</p>
      <p>Thanh toán khi giao hàng (COD)</p>
    </div>
    `,
      showCloseButton: false,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `
        <i class="fa fa-thumbs-up"></i> Great!
      `,
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: `
        <i class="fa fa-thumbs-down"></i>
      `,
      cancelButtonAriaLabel: "Thumbs down",
    });
  }

  useEffect(() => {
    if (errors.name?.message) toast.error(errors.name?.message);
    if (touchedFields.phoneNumber && errors.phoneNumber?.message)
      toast.error(errors.phoneNumber?.message);
    if (touchedFields.email && errors.email?.message)
      toast.error(errors.email?.message);
  }, [errors, errors?.email, errors?.phoneNumber]);
  return (
    <div>
      <div className={`z-50 modal bg-black/40`}>
        <div className="modal-content w-[895px] h-[450px]  overflow-y-auto overflow-x-hidden">
          <PaymentHeader onDevice={{ mobile: false, pc: true }}></PaymentHeader>
          <form
            autoComplete="off"
            onSubmit={handleSubmit(handleSubmitFormPayment)}
          >
            <LayoutPayment>
              <PaymentInfoProduct
                dataPay={{ data, dataPayment }}
              ></PaymentInfoProduct>
              <div className="px-8 py-6 pt-6 mt-3 bg-white rounded-lg">
                <span>Thông tin khách hàng</span>
                <div>
                  <div className="flex items-center mt-3">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="sex"
                        id="male"
                        checked={true}
                        className="mt-1 mr-[6px]"
                      />
                      <label
                        className="text-sm font-medium select-none"
                        htmlFor="male"
                      >
                        Anh
                      </label>
                    </div>
                    <div className="flex items-center ml-3">
                      <input
                        type="radio"
                        name="sex"
                        id="female"
                        className="mt-1 mr-[6px]"
                      />
                      <label
                        className="text-sm font-medium select-none"
                        htmlFor="female"
                      >
                        Chị
                      </label>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between">
                      <div className="w-[395px]">
                        <label
                          htmlFor="buyer__name"
                          className="text-sm font-medium"
                        >
                          Họ và tên
                        </label>
                        <input
                          type="text"
                          name="name"
                          {...register("name")}
                          id="buyer__name"
                          className={`w-full input--payment placeholder:text-sm placeholder:text-[#dfe0e3] mt-2 focus:border-b-[#80bdff] ease-linear duration-75 mb-3 ${
                            errors?.name?.message && "focus:border-b-red-500"
                          }`}
                          placeholder="Dương Nhật Thành"
                        />
                      </div>
                      <div className="w-[395px]">
                        <label
                          htmlFor="phoneNumber"
                          className="text-sm font-medium"
                        >
                          Số điện thoại
                        </label>
                        <input
                          id="phoneNumber"
                          name="phoneNumber"
                          {...register("phoneNumber")}
                          type="text"
                          className="w-full input--payment placeholder:text-sm placeholder:text-[#dfe0e3] mt-2 focus:border-b-[#80bdff] mb-3"
                          placeholder="0123456789"
                        />
                      </div>
                    </div>
                    <div className="">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium block"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="text"
                        {...register("email")}
                        className="w-[800px] input--payment placeholder:text-sm placeholder:text-[#dfe0e3] focus:border-b-[#80bdff]"
                        placeholder="abc@gmail.com"
                      />
                    </div>
                  </div>
                </div>
              </div>
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
                        checked
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
                        onClick={() =>
                          dispatch(handleShowProvinces(!showProvince))
                        }
                        className="w-[786px] cursor-pointer flex items-center"
                      >
                        <span
                          className={`text-sm ${
                            labelProvince
                              ? "text-black font-semibold"
                              : "text-[#e3e0de]"
                          } mb-1`}
                        >
                          {labelProvince
                            ? labelProvince
                            : "Chọn Tỉnh / Thành Phố"}
                        </span>
                        <FontAwesomeIcon
                          icon={faCaretDown}
                          className="ml-auto cursor-pointer"
                        />
                      </div>
                      <div className="w-[786px] h-[0.5px] bg-[#ced4da]"></div>
                      {showProvince && (
                        <div className="max-w-[780px] border border-[#ced4da] w-[786px] relative top-[-10px] mt-5">
                          <ul className="list-country list-none max-h-[10em] overflow-y-auto w-[786px]">
                            {dataProvince.map((item) => {
                              return (
                                <li
                                  onClick={() => {
                                    dispatch(handleShowProvinces(false));
                                    setIdProvince(item.province_id);
                                    setLabelProvince(item.province_name);
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
                        onClick={() =>
                          dispatch(handleShowDistricts(!showDistrict))
                        }
                        className="w-[786px] cursor-pointer flex items-center"
                      >
                        <span
                          className={`text-sm ${
                            labelDistrict
                              ? "text-black font-semibold"
                              : "text-[#e3e0de]"
                          } mb-1`}
                        >
                          {labelDistrict ? labelDistrict : "Chọn Quận / Huyện"}
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
                                      dispatch(handleShowDistricts(false));
                                      setIdDistrict(item.district_id);
                                      setLabelDistrics(item.district_name);
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
                    <label className="mb-3 text-sm font-medium mt-3">
                      Phường / Xã
                    </label>
                    <div>
                      <div
                        onClick={() => dispatch(handleShowWards(!showWards))}
                        className="w-[786px] cursor-pointer flex items-center"
                      >
                        <span
                          className={`text-sm ${
                            labelWard
                              ? "text-black font-semibold"
                              : "text-[#e3e0de]"
                          } mb-1`}
                        >
                          {labelWard ? labelWard : "Chọn Phường / Xã"}
                        </span>
                        <FontAwesomeIcon
                          icon={faCaretDown}
                          className="ml-auto cursor-pointer"
                        />
                      </div>
                      <div className="w-[786px] h-[0.5px] bg-[#ced4da]"></div>
                      {showWards && (
                        <div className="max-w-[780px] border border-[#ced4da] w-[786px] relative top-[-10px] mt-5">
                          <ul className="list-country list-none max-h-[10em] overflow-y-auto w-[786px]">
                            {dataWards.length > 0 &&
                              dataWards.map((item) => {
                                return (
                                  <li
                                    onClick={() => {
                                      dispatch(handleShowWards(false));
                                      setLabelWard(item.ward_name);
                                    }}
                                    className="cursor-pointer py-[5px] hover:bg-blue-500 hover:text-white pl-2"
                                  >
                                    {item.ward_name}
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
                      htmlFor="input__address"
                      className="text-sm font-medium"
                    >
                      Đường / Thôn xóm
                    </label>
                    <input
                      type="text"
                      name="input__address"
                      id="input__address"
                      className="w-[786px] input--payment placeholder:text-sm placeholder:text-[#dfe0e3] mt-2 focus:border-b-[#80bdff] ease-linear duration-75 mb-4"
                      placeholder="Nhập Đường / Thôn xóm"
                    />
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
              <div className="pt-6 pb-12 text-center">
                <button
                  type="submit"
                  className="w-[265px] h-[45px] bg-[#006d9c] text-white font-medium rounded-lg hover:scale-x-105 hover:scale-y-105 ease-in duration-100"
                >
                  Xác nhận đặt hàng
                </button>
              </div>
            </LayoutPayment>
            <ToastContainer></ToastContainer>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
