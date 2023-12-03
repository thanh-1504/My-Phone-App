import { data } from "../../data/data";

let product = [
  {
    id: 239,
    type: "128GB WIFI",
    name: "iPad Pro M2 12.9″ [WiFi & Cellular]",
    price: "24.990.000 đ",
    imgSrc:
      "https://www.bihouse.vn/img_data/images/132657839873-iPad-Pro-M2-129-5G-grey-thumb-650x650-1.png",
    TechnicalSpecifications: {
      model: "iPad Pro",
      screenTechnology: "Liquid Retina HD",
      resolution: "2732 x 2048 Pixels ",
      screen: "12.9 inch",
      frontCamera: "12 MP",
      rearCamera: "10 MP & 12 MP",
      cpu: "Apple M2",
    },
  },
  {
    id: 239,
    type: "128GB WIFI",
    name: "iPad Pro M2 12.9″ [WiFi & Cellular]",
    price: "24.990.000 đ",
    imgSrc:
      "https://www.bihouse.vn/img_data/images/132657839873-iPad-Pro-M2-129-5G-grey-thumb-650x650-1.png",
    TechnicalSpecifications: {
      model: "iPad Pro",
      screenTechnology: "Liquid Retina HD",
      resolution: "2732 x 2048 Pixels ",
      screen: "12.9 inch",
      frontCamera: "12 MP",
      rearCamera: "10 MP & 12 MP",
      cpu: "Apple M2",
    },
  },
];

export function requestData() {
  return new Promise((resolve, reject) => {
    resolve(data);
  });
}
