import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
const WarrantyText = () => {
  return (
    <div>
      <div className="flex items-center">
        <FontAwesomeIcon icon={faRotate} className="text-white" />
        <span className="text-white">
          CHÍNH SÁCH HẬU MÃI - VƯỢT LÊN MỌI GIỚI HẠN
        </span>
      </div>
    </div>
  );
};

export default WarrantyText;
