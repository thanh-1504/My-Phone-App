/* eslint-disable react/style-prop-object */
import React from "react";

const SpecificationTable = ({ style = "" }) => {
  return (
    <table className="text-center border border-[#c6c3c3] mb:mb-[60px] lg:mb-0 ${style}">
      <tbody>
        <tr>
          <td className="p-3 border ">
            <span>
              <strong className="text-center mb:text-[#c6c3c3] lg:text-white">
                Công nghệ màn hình
              </strong>
            </span>
          </td>
          <td className="p-3 border ">
            <span>
              <strong className="text-[#c6c3c3]">
                Super Retina XDR - OLED
              </strong>
            </span>
          </td>
        </tr>
        <tr>
          <td className="border ">
            <span>
              <strong className="text-center mb:text-[#c6c3c3] lg:text-white">
                Độ phân giải:
              </strong>
            </span>
          </td>
          <td className="p-3 border ">
            <span>
              <strong className="text-[#c6c3c3]">2532 x 1170 Pixels </strong>
            </span>
          </td>
        </tr>
        <tr>
          <td className="border ">
            <span>
              <strong className="text-center mb:text-[#c6c3c3] lg:text-white">
                Màn hình rộng
              </strong>
            </span>
          </td>
          <td className="p-3 border ">
            <span>
              <strong className="text-[#c6c3c3]">6.1 inch </strong>
            </span>
          </td>
        </tr>
        <tr>
          <td className="border ">
            <span>
              <strong className="text-center mb:text-[#c6c3c3] lg:text-white">
                Camera trước
              </strong>
            </span>
          </td>
          <td className="p-3 border ">
            <span>
              <strong className="text-[#c6c3c3]">12 MP</strong>
            </span>
          </td>
        </tr>
        <tr>
          <td className="border ">
            <span>
              <strong className="text-center mb:text-[#c6c3c3] lg:text-white">
                Camera sau
              </strong>
            </span>
          </td>
          <td className="p-3 border ">
            <span>
              <strong className="text-[#c6c3c3]">3 camera 12 MP </strong>
            </span>
          </td>
        </tr>
        <tr>
          <td className="border ">
            <span>
              <strong className="text-center mb:text-[#c6c3c3] lg:text-white">
                Chip
              </strong>
            </span>
          </td>
          <td className="p-3 border ">
            <span>
              <strong className="text-[#c6c3c3]">Apple A14 Bionic</strong>
            </span>
          </td>
        </tr>
        <tr>
          <td className="border ">
            <span>
              <strong className="text-center mb:text-[#c6c3c3] lg:text-white">
                Dung lượng pin
              </strong>
            </span>
          </td>
          <td className="p-3 border ">
            <span>
              <strong className="text-[#c6c3c3]">2815 mAh</strong>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SpecificationTable;
