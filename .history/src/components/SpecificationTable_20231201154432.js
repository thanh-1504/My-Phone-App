/* eslint-disable react/style-prop-object */
import React from "react";

const SpecificationTable = ({ style = "", data }) => {
  if (!data) return;
  const {
    batteryLife,
    cpu,
    frontCamera,
    rearCamera,
    resolution,
    screen,
    screenTechnology,
    weight,
  } = data;
  return (
    <table
      className={`text-center border border-[#c6c3c3] mb:mb-[40px] lg:mb-0 ${style}`}
    >
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
              <strong className="text-[#c6c3c3]">{screenTechnology}</strong>
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
              <strong className="text-[#c6c3c3]">{resolution} </strong>
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
              <strong className="text-[#c6c3c3]">{screen} </strong>
            </span>
          </td>
        </tr>
        {frontCamera ||
          (rearCamera && (
            <>
              {" "}
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
                    <strong className="text-[#c6c3c3]">{frontCamera}</strong>
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
                    <strong className="text-[#c6c3c3]">{rearCamera} </strong>
                  </span>
                </td>
              </tr>
            </>
          ))}

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
              <strong className="text-[#c6c3c3]">{cpu}</strong>
            </span>
          </td>
        </tr>
        <tr>
          <td className="border ">
            <span>
              <strong className="text-center mb:text-[#c6c3c3] lg:text-white">
                Khối lượng
              </strong>
            </span>
          </td>
          <td className="p-3 border ">
            <span>
              <strong className="text-[#c6c3c3]">{weight}</strong>
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
              <strong className="text-[#c6c3c3]">{batteryLife}</strong>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SpecificationTable;
