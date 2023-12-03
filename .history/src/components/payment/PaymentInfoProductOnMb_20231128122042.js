import React from 'react';

const PaymentInfoProductOnMb = () => {
    return (
        <div className="bg-white rounded-t-lg">
            <div className="flex items-center">
              <img
                className="w-[83px] h-[88px] object-cover mr-4 ml-6"
                src="https://www.bihouse.vn/img_data/images/513311110185-zyro-image-(2).png"
                alt=""
              />
              <p className="font-medium">iPhone 15 Pro Max</p>
              <PaymentPriceAndQuantity></PaymentPriceAndQuantity>
            </div>
            <PaymentPrice></PaymentPrice>
          </div>
    );
};

export default PaymentInfoProductOnMb;