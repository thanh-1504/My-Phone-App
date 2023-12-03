import { data } from "../../data/data";

export function requestData() {
  return new Promise((resolve, reject) => {
    resolve(data);
  });
}

export function getProductDataByName(id) {
  return new Promise((resolve, reject) => {
    resolve(data.filter((item) => item.id == ));
  });
}
