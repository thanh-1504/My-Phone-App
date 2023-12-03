/* eslint-disable react/style-prop-object */
import React from "react";

const SpecificationTable = () => {
  return (
    <table className="text-center border border-[#c6c3c3]">
      <tbody>
        <tr>
          <td className="p-3 border ">
            <span>
              <strong className="text-center text-[#c6c3c3]">
                Công nghệ màn hình
              </strong>
            </span>
          </td>
          <td className="p-3 border ">
            <span>
              <strong className="text-[#c6c3c3]">
                Super Retina XDR - OLED{" "}
              </strong>
            </span>
          </td>
        </tr>
        <tr>
          <td className="border ">
            <span>
              <strong className="text-center text-[#c6c3c3]">
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
      </tbody>
    </table>
  );
};

export default SpecificationTable;
