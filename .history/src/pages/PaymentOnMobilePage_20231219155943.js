/* eslint-disable react/style-prop-object */
import Swal from "sweetalert2";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import {
  handleFetchProvince,
  handleFetchWard,
  handlerFetchDistrict,
} from "../reux-thunk/Slice/handler";
import {
  handleSetInfoBuyer,
  handleShowDistricts,
  handleShowProvinces,
  handleShowWards,
} from "../reux-thunk/Slice/paymentSlice";
import PaymentInfoProductOnMb from "../components/payment/PaymentInfoProductOnMb";
import PaymentHeader from "../components/payment/PaymentHeader";
import PaymentConfirmOrder from "../components/payment/PaymentConfirmOrder";
import LayoutPayment from "../layouts/LayoutPayment";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
const schema = yup.object({
  name: yup.string().required("Vui lòng nhập tên của bạn"),
  email: yup.string().email().required("Vui lòng nhập email của bạn"),
  phoneNumber: yup
    .number()
    .min(10, "Vui lòng nhập số điện thoại có ít nhất 10 số")
    .required("Vui lòng nhập số điện thoại")
    .typeError("Vui lòng nhập số không nhập chữ"),
  address: yup.string().required("Vui lòng nhập địa chỉ!"),
});
const PaymentOnMobilePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const [idProvince, setIdProvince] = useState("");
  const [labelProvince, setLabelProvince] = useState("");
  const [labelDistrict, setLabelDistrics] = useState("");
  const [labelWard, setLabelWard] = useState("");
  const [idDistrict, setIdDistrict] = useState("");
  const navigate = useNavigate();
  const { showProvince, showDistrict, showWards } = useSelector(
    (state) => state.payment
  );
  const { dataProvince, dataDistrict, dataWards, infoBuyer } = useSelector(
    (state) => state.payment
  );
  const dispatch = useDispatch();
  const { dataOption } = useSelector((state) => state.option);
  useEffect(() => {
    dispatch(handleFetchProvince());
    dispatch(handlerFetchDistrict(idProvince));
    dispatch(handleFetchWard(idDistrict));
  }, [dispatch, idProvince, idDistrict]);
  const handleSubmitFormPayment = (values) => {
    dispatch(
      handleSetInfoBuyer({
        nameBuyer: values.name,
        phoneBuyer: values.phoneNumber,
        addressBuyer: values.address,
      })
    );
  };
  if (isSubmitSuccessful) {
    Swal.fire({
      title: "Đặt hàng thành công",
      iconHtml:
        '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" color="#57d17c" height="80" width="80" xmlns="http://www.w3.org/2000/svg" style="color: rgb(87, 209, 124);"><path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>',
      customClass: { icon: "no-border" },
      html: `
      <div >
      <h2 class="info_text">Thông tin đơn hàng</h2>
      <span class="info_text-time">Thông tin giao hàng</span>
      <div>
        <p class="info_buyer">Họ tên: ${infoBuyer.nameBuyer}</p>
        <p class="info_buyer">Số điện thoại: ${infoBuyer.phoneBuyer}</p>
        <p class="info_buyer">Địa chỉ: ${infoBuyer.addressBuyer}</p>
      </div>
      <div class="info__wrap-ship">
      <p class="info_text">Phương thức thanh toán</p>
      <p class="info_buyer">Thanh toán khi giao hàng (COD)</p>
      </div>
    </div>
    `,
      showCloseButton: false,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `
        <i class="fa fa-thumbs-up"></i> Tiếp tục mua hàng
      `,
      cancelButtonText: `
        <i class="fa fa-thumbs-down"></i> Hủy bỏ
      `,
    });
  }
  useEffect(() => {
    if (errors.name?.message) toast.error(errors.name?.message);
    if (touchedFields.phoneNumber && errors.phoneNumber?.message)
      toast.error(errors.phoneNumber?.message);
    if (touchedFields.email && errors.email?.message)
      toast.error(errors.email?.message);
  }, [errors, errors?.email, errors?.phoneNumber]);
  useEffect(() => {
    const confirmBtn = document.querySelector(".swal2-confirm");
    confirmBtn &&
      confirmBtn.addEventListener("click", () => {
        navigate("/");
      });
  });
  return (
    <div>
      <PaymentHeader onDevice={{ mobile: true, pc: false }}></PaymentHeader>
      <form onSubmit={handleSubmit(handleSubmitFormPayment)} autoComplete="off">
        <LayoutPayment style=" bg-[#ebf4f8] ">
          <PaymentInfoProductOnMb dataPay={dataOption}></PaymentInfoProductOnMb>
          <div className="py-6 pt-6 pl-8 pr-2 mt-3 bg-white rounded-lg">
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
                <div>
                  <label
                    htmlFor="buyer__name"
                    className="block text-sm font-medium"
                  >
                    Họ và tên
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    name="name"
                    id="buyer__name"
                    className={`w-full input--payment placeholder:text-sm placeholder:text-[#dfe0e3] mt-2 focus:border-b-[#80bdff] ease-linear duration-75 mb-3 ${
                      errors?.name?.message && "focus:border-b-red-500"
                    }`}
                    placeholder="Dương Nhật Thành"
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium"
                  >
                    Số điện thoại
                  </label>
                  <input
                    {...register("phoneNumber")}
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    className={`w-full input--payment placeholder:text-sm placeholder:text-[#dfe0e3] mt-2 focus:border-b-[#80bdff] mb-3 ${
                      errors?.phoneNumber?.message && "focus:border-b-red-500"
                    }`}
                    placeholder="0123456789"
                  />
                </div>
                <div className="">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    {...register("email")}
                    name="email"
                    type="text"
                    className={`w-full input--payment placeholder:text-sm placeholder:text-[#dfe0e3] focus:border-b-[#80bdff] ${
                      errors?.email?.message && "focus:border-b-red-500"
                    }`}
                    placeholder="abc@gmail.com"
                  />
                </div>
              </div>
            </div>
          </div>
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
            <div className="flex flex-col mt-5">
              <label className="block mb-3 text-sm font-medium">
                Tỉnh / Thành phố
              </label>
              <div>
                <div
                  onClick={() => dispatch(handleShowProvinces(!showProvince))}
                  className="flex items-center w-full cursor-pointer"
                >
                  <span
                    className={`text-sm ${
                      labelProvince
                        ? "text-black font-semibold"
                        : "text-[#e3e0de]"
                    } mb-1`}
                  >
                    {labelProvince ? labelProvince : "Chọn Tỉnh / Thành Phố"}
                  </span>
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    className="ml-auto cursor-pointer"
                  />
                </div>
                <div className="w-[340px] h-[0.5px] bg-[#ced4da]"></div>
                {showProvince && (
                  <div className="max-w-[780px] border border-[#ced4da] w-[340px] relative top-[-10px] mt-5">
                    <ul className="list-country list-none max-h-[10em] overflow-y-auto w-[340px]">
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
              <label className="mt-3 mb-3 text-sm font-medium">
                Quận / Huyện
              </label>
              <div>
                <div
                  onClick={() => dispatch(handleShowDistricts(!showDistrict))}
                  className="w-[340px] cursor-pointer flex items-center"
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
                <div className="w-[340px] h-[0.5px] bg-[#ced4da]"></div>
                {showDistrict && (
                  <div className="max-w-[780px] border border-[#ced4da] w-[340px] relative top-[-10px] mt-5">
                    <ul className="list-country list-none max-h-[10em] overflow-y-auto w-[340px]">
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
              <label className="mt-3 mb-3 text-sm font-medium">
                Phường / Xã
              </label>
              <div>
                <div
                  onClick={() => dispatch(handleShowWards(!showWards))}
                  className="w-[340px] cursor-pointer flex items-center"
                >
                  <span
                    className={`text-sm ${
                      labelWard ? "text-black font-semibold" : "text-[#e3e0de]"
                    } mb-1`}
                  >
                    {labelWard ? labelWard : "Chọn Phường / Xã"}
                  </span>
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    className="ml-auto cursor-pointer"
                  />
                </div>
                <div className="w-[340px] h-[0.5px] bg-[#ced4da]"></div>
                {showWards && (
                  <div className="max-w-[780px] border border-[#ced4da] w-[340px] relative top-[-10px] mt-5">
                    <ul className="list-country list-none max-h-[10em] overflow-y-auto w-[340px]">
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
            <div className="mt-3">
              <label htmlFor="input__address" className="text-sm font-medium">
                Đường / Thôn xóm
              </label>
              <input
                {...register("address")}
                type="text"
                name="address"
                id="input__address"
                className="w-[340px] input--payment placeholder:text-sm placeholder:text-[#dfe0e3] mt-2 focus:border-b-[#80bdff] ease-linear duration-75 mb-4"
                placeholder="Nhập Đường / Thôn xóm"
              />
              <label htmlFor="input__note" className="text-sm font-medium">
                Ghi chú
              </label>
              <input
                type="text"
                name="input__note"
                id="input__note"
                className="w-[340px] input--payment placeholder:text-sm placeholder:text-[#dfe0e3] mt-2 focus:border-b-[#80bdff] ease-linear duration-75"
                placeholder="Điền ghi chú"
              />
            </div>
          </div>
          <PaymentConfirmOrder></PaymentConfirmOrder>
        </LayoutPayment>
        <ToastContainer></ToastContainer>
      </form>
    </div>
  );
};

export default PaymentOnMobilePage;
