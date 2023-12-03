import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRotate,
  faGem,
  faMobileScreenButton,
  faTruck,
  faLaptop,
  faCreditCard,
  faGift,
  faBullhorn,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
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
      <div className="mt-2">
        <FontAwesomeIcon
          icon={faMobileScreenButton}
          className="text-white"
        ></FontAwesomeIcon>
        <span className="text-[#c6c3c3] ml-2">
          HỖ TRỢ vi phạm BẢO HÀNH ( rơi, vỡ, vào nước ) - Đội ngũ ĐÀO TẠO bởi
          Apple
        </span>
      </div>
      <div className="mt-2">
        <FontAwesomeIcon
          icon={faTruck}
          className="text-white"
        ></FontAwesomeIcon>
        <span className="text-[#c6c3c3] ml-2">Freeship TOÀN QUỐC *</span>
      </div>
      <div className="mt-2">
        <FontAwesomeIcon
          icon={faLaptop}
          className="text-white"
        ></FontAwesomeIcon>
        <span className="text-[#c6c3c3] ml-2">Cài đặt phần mềm miễn phí</span>
      </div>
      <div className="mt-2">
        <FontAwesomeIcon
          icon={faCreditCard}
          className="text-white"
        ></FontAwesomeIcon>
        <span className="text-[#c6c3c3] ml-2">
          Góp 0% - KHÔNG gọi người thân - KHÔNG trả trước
        </span>
      </div>
      <div className="mt-2">
        <FontAwesomeIcon
          icon={faBullhorn}
          className="text-white"
        ></FontAwesomeIcon>
        <span className="text-[#c6c3c3] ml-2">
          Better Together - Hân Hạnh đồng hành và tốt lên cùng bạn
        </span>
      </div>
      <div className="mt-2">
        <FontAwesomeIcon icon={faGift} className="text-white"></FontAwesomeIcon>
        <span className="text-[#c6c3c3] ml-2">
          Quà CHẤT ( Cường lực + Ốp ) Gift Card + TÀI LIỆU Apple
        </span>
      </div>
      <div className="mt-2">
        <FontAwesomeIcon icon={faGem} className="text-white"></FontAwesomeIcon>
        <span className="text-[#c6c3c3] ml-2">
          LƯU Ý : Giá có thể thay đổi theo màu & theo ngày. Thân !
        </span>
      </div>
    </div>
  );
};

export default WarrantyText;
