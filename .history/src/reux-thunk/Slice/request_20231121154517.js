import { data } from "../../data/data";

export function requestData() {
  return new Promise((resolve, reject) => {
    resolve(data);
  });
}

export const getDataBySlug = () => {
  return new Promise((resolve, reject) => {
    resolve(data.dataNavPage);
  });
};

export const getAllData
