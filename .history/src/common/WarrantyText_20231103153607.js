import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
const WarrantyText = () => {
  return (
    <div>
      <div>
        <FontAwesomeIcon icon={faRotate} className="text-white" />

        <p className="text-[#c6c3c3] ml-2">
          1 ĐỔI 1 MIỄN PHÍ - Mở Rộng ĐỔI thêm 2 năm sau khi hết bảo hành Apple
        </p>
      </div>
    </div>
  );
};

export default WarrantyText;
