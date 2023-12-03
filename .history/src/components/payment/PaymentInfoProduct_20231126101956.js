import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
const PaymentInfoProduct = ({ data = {} }) => {
  const { current } = useSelector((state) => state.payment);
  console.log(data);
  return (
    <div className="bg-white rounded-t-lg">
      <div className="flex items-center">
        <img
          className="w-[83px] h-[88px] object-cover mr-4 ml-6"
          src="https://www.bihouse.vn/img_data/images/513311110185-zyro-image-(2).png"
          alt=""
        />
        <p>{data?.data[0]?.name}</p>
        <div>
          <div className="ml-[400px] flex">
            <div className="cursor-pointer bg-[#f4f5f5] w-5 h-5 relative rounded ">
              <FontAwesomeIcon
                icon={faMinus}
                className="w-[40px] h-2 absolute top-[0.35rem] right-[-0.7rem] translate-x-[-3%] translate-y-[1px] "
              />
            </div>
            <span className="h-5 px-[0.314rem] ml-2 border rounded border-[rgba(34, 49, 63, 0.1)] select-none relative leading-4 mr-2 ">
              {current}
            </span>
            <div className="cursor-pointer bg-[#f4f5f5] w-5 h-5 relative rounded">
              <FontAwesomeIcon
                icon={faPlus}
                onClick={() => dispatch(test())}
                className="w-[40px] h-2 absolute top-[0.35rem] right-[-0.7rem] translate-x-[-3%] translate-y-[1px] "
              />
            </div>
          </div>
          <span className="absolute right-[135px] mt-1 text-[#98a4b1] font-medium text-base">
            {data?.dataPayment?.price}
          </span>
        </div>
      </div>
      <div className="w-full h-10 bg-[#f9f9f9]">
        <div className="leading-[2.5rem] float-right mr-[118px]">
          <span className="text-sm font-semibold">Giá trị đơn hàng: </span>
          <span className="text-base font-semibold text-red-500">
            {data?.dataPayment?.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfoProduct;
