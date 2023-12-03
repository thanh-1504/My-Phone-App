import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
const WarrantyText = () => {
  return (
    <div>
      <div className="flex items-center">
        <FontAwesomeIcon icon={faRotate} className="text-white" />
        <span className="text-[#c6c3c3] ml-3">
          1 ĐỔI 1 MIỄN PHÍ - Mở Rộng ĐỔI thêm 2 năm sau khi hết bảo hành Apple
        </span>
      </div>
    </div>
  );
};

export default WarrantyText;
