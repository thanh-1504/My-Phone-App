import { data } from "../../data/data";

export function requestData() {
  return new Promise((resolve, reject) => {
    resolve(data);
  });
}

export function getProductDataByName(id) {
  return new Promise((resolve, reject) => {
    resolve(data.dataMainPage.filter((item) => item.id === "1"));
  });
}
