export const getProducts = (resolve) => {
  return new Promise((resolve) => {
    resolve({
      id: 75,
      name: "Iphone 14 Pro",
      price: "25.490.000 đ",
      imgSrc: "https://www.bihouse.vn/img_data/images/632077b784843.png",
      TechnicalSpecifications: {
        model: "Iphone 14 Series",
        color: "Màu xám",
        screenTechnology: "Super Retina XDR",
        resolution: "2556 x 1179 Pixels",
        screen: "6.1 inch - Tần số quét 120 Hz",
        touchGlass: "Kính cường lực Ceramic Shield",
        frontCamera: "12 MP",
        rearCamera: "Chính 48 MP & Phụ 12 MP",
        cpu: "Apple A16 Bionic 6 nhân",
        weight: "206g",
        capacity: "256GB",
        batteryLife: "3200 mAh",
      },
    });
  });
};
