import React from "react";
const warrantyItem = [{srcImg:"https://www.bihouse.vn/img_data/images/253309473791-1icon.png"}]
const WarrantyItem = ({ srcWarrantyImg = "" }) => {
  return <img src={srcWarrantyImg} alt="" />;
};

export default WarrantyItem;
