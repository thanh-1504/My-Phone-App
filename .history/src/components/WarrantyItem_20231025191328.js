import React from "react";
const warrantyItem = [
  { srcImg: "https://www.bihouse.vn/img_data/images/253309473791-1icon.png" },
  { srcImg: "https://www.bihouse.vn/img_data/images/573360051574-2icon.png" },
  { srcImg: "https://www.bihouse.vn/img_data/images/549294739404-3icon.png" },
  { srcImg: "https://www.bihouse.vn/img_data/images/755164095562-4icon.png" },
];
const WarrantyItem = () => {
  return (
    <div className="w-full mb:grid mb:grid-cols-2 ">
      {warrantyItem.map((item) => (
        <img
          key={item.srcImg}
          src={item.srcImg}
          alt="warrantyImg"
          className="p-5"
        />
      ))}
    </div>
  );
};

export default WarrantyItem;
