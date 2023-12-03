import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate, faGem } from "@fortawesome/free-solid-svg-icons";
const WarrantyText = () => {
  return (
    <div>
      <div>
        <FontAwesomeIcon icon={faRotate} className="text-white" />
        <span className="text-[#c6c3c3] ml-2">
          1 ĐỔI 1 MIỄN PHÍ - Mở Rộng ĐỔI thêm 2 năm sau khi hết bảo hành Apple
        </span>
      </div>
      <div className="mt-2">
        <FontAwesomeIcon icon={faGem} className="text-white"></FontAwesomeIcon>
        <span className="text-[#c6c3c3] ml-2">
          Pin + Phụ Kiện bảo hành TRỌN ĐỜI
        </span>
      </div>
    </div>
  );
};

export default WarrantyText;
