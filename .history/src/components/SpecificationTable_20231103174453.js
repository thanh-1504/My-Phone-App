/* eslint-disable react/style-prop-object */
import React from "react";

const SpecificationTable = () => {
  return (
    <table className="text-center border border-white">
      <tbody>
        <tr>
          <td className="p-3 border ">
            <span>
              <strong className="text-center text-white">
                Công nghệ màn hình
              </strong>
            </span>
          </td>
          <td className="p-3 border ">
            <span>
              <strong className="text-white">Super Retina XDR - OLED </strong>
            </span>
          </td>
        </tr>
        <tr>
          <td className="border ">
            <span>
              <strong className="text-center text-white">Độ phân giải:</strong>
            </span>
          </td>
          <td className="p-3 border ">
            <span>
              <strong className="text-white">2532 x 1170 Pixels </strong>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SpecificationTable;
