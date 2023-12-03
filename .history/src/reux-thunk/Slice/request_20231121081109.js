import { data } from "../../data/data";

export function requestData() {
  return new Promise((resolve, reject) => {
    resolve(data);
  });
}

export const getDataBySlug = (slug) => {
  return new Promise((resolve, reject) => {
    resolve(data.filter((item) => item.slug === slug));
  });
};
