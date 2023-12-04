import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-full bg-[#141414] pt-[30px] pb-7">
      <p className="text-center text-[#b5b5b5] uppercase mb-10">
        Thông tin liên hệ
      </p>
      <div className="flex mb:flex-col px-[15px] lg:flex-row lg:justify-around  ">
        <div className="lg:mt-4">
          <div className="flex items-center ">
            <img
              src="https://www.bihouse.vn/templates/assets/img/icon-home.png"
              alt=""
            />
            <span className="ml-3 text-white">Địa chỉ</span>
          </div>
          <span className="text-[#bbbbbb] mt-2 mb:mb-3 lg:mb-0  ">
            Tp Hồ Chí Minh, Phường 9, Quận 6
          </span>
        </div>

        <div className="mb:mt-6 lg:mt-4">
          <div className="flex items-center ">
            <img
              src="https://www.bihouse.vn/templates/assets/img/icon-phone.png"
              alt=""
            />
            <span className="ml-3 text-white">Kỹ thuật</span>
          </div>
          <span className="text-[#bbbbbb] mt-2 mb:mb-3 lg:mb-0">
            Hotline: 09********
          </span>
        </div>
        <div className="mb:mt-6 lg:mt-4">
          <div className="flex items-center ">
            <img
              src="https://www.bihouse.vn/templates/assets/img/icon-sale.png"
              alt=""
            />
            <span className="ml-3 text-white">Mua hàng</span>
          </div>
          <span className="text-[#bbbbbb] mt-2 mb:mb-3 lg:mb-0">
            Hotline: 09********
          </span>
        </div>
        <div className="mb:mt-6 lg:mt-4">
          <div className="flex items-center ">
            <img
              src="https://www.bihouse.vn/templates/assets/img/icon-sale.png"
              alt=""
            />
            <span className="ml-3 text-white">Phản Ánh + Góp Ý</span>
          </div>
          <span className="text-[#bbbbbb] mt-2">Hotline: 09********</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
