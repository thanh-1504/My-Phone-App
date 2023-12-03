/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from "react";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PaymentRequestOrder from "../components/payment/PaymentRequestOrder";
import PaymentPriceAndQuantity from "../components/payment/PaymentPriceAndQuantity";
import PaymentPrice from "../components/payment/PaymentPrice";
import PaymentInfoBuyer from "../components/payment/PaymentInfoBuyer";
import PaymentHeader from "../components/payment/PaymentHeader";
import PaymentConfirmOrder from "../components/payment/PaymentConfirmOrder";
import LayoutPayment from "../layouts/LayoutPayment";
import { useDispatch, useSelector } from "react-redux";
import {
  handleFetchProvince,
  handleFetchWard,
  handlerFetchDistrict,
} from "../reux-thunk/Slice/handler";
import {
  handleShowDistricts,
  handleShowProvinces,
  handleShowWards,
} from "../reux-thunk/Slice/paymentSlice";
import PaymentInfoProductOnMb from "../components/payment/PaymentInfoProductOnMb";
import PaymentInfoBuyerOnMb from "../components/payment/PaymentInfoBuyerOnMb";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
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
  const { showProvince, showDistrict, showWards } = useSelector(
    (state) => state.payment
  );
  const { isBuyProduct, dataProvince, dataDistrict, dataWards } = useSelector(
    (state) => state.payment
  );
  const dispatch = useDispatch();
  const { dataOption } = useSelector((state) => state.option);
  useEffect(() => {
    dispatch(handleFetchProvince());
    dispatch(handlerFetchDistrict(idProvince));
    dispatch(handleFetchWard(idDistrict));
  }, [dispatch, idProvince, idDistrict]);
  return (
    <div>
      <PaymentHeader onDevice={{ mobile: true, pc: false }}></PaymentHeader>
      <form autoComplete="off">
        <LayoutPayment style=" bg-[#ebf4f8] ">
          <PaymentInfoProductOnMb dataPay={dataOption}></PaymentInfoProductOnMb>
          <PaymentInfoBuyerOnMb></PaymentInfoBuyerOnMb>
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
            <label className="text-sm font-medium select-none" htmlFor="male">
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
            <label className="text-sm font-medium select-none" htmlFor="female">
              Chị
            </label>
          </div>
        </div>
        <div className="mt-3">
          <div>
            <label htmlFor="buyer__name" className="text-sm font-medium">
              Họ và tên
            </label>
            <input
              type="text"
              name="input__buy"
              id="buyer__name"
              className="w-[340px] input--payment placeholder:text-sm placeholder:text-[#dfe0e3] mt-2 focus:border-b-[#80bdff] ease-linear duration-75 mb-3"
              placeholder="Dương Nhật Thành"
            />
          </div>
          <div className="">
            <label htmlFor="phoneNumber" className="text-sm font-medium">
              Số điện thoại
            </label>
            <input
              id="phoneNumber"
              name="input__phone-number"
              type="text"
              className="w-[340px] input--payment placeholder:text-sm placeholder:text-[#dfe0e3] mt-2 focus:border-b-[#80bdff] mb-3"
              placeholder="0123456789"
            />
          </div>
          <div className="">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="input__email"
              type="text"
              className="w-[340px] input--payment placeholder:text-sm placeholder:text-[#dfe0e3] focus:border-b-[#80bdff]"
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
              <label className="mb-3 text-sm font-medium">
                Tỉnh / Thành phố
              </label>
              <div>
                <div
                  onClick={() => dispatch(handleShowProvinces(!showProvince))}
                  className="w-[340px] cursor-pointer flex items-center"
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
              <label className="mb-3 text-sm font-medium mt-3">
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
              <label className="mb-3 text-sm font-medium mt-3">
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
      </form>
    </div>
  );
};

export default PaymentOnMobilePage;
