import { data, dataTest } from "../../data/data";

export function requestData() {
  return new Promise((resolve, reject) => {
    resolve(data);
  });
}

export const getDataBySlug = (slug) => {
  return new Promise((resolve, reject) => {
    resolve(dataTest.filter((item) => item.slug));
  });
};
