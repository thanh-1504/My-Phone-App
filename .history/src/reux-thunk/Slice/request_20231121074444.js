import { data, dataTest } from "../../data/data";

export function requestData() {
  return new Promise((resolve, reject) => {
    resolve(data);
  });
}

export function getDataBySlug(slug) {
  return new Promise((resolve, reject) => {
    resolve(dataTest.flat(10).filter((item) => item.slug));
  });
}
