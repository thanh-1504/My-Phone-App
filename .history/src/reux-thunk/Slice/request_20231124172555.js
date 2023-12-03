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

export const getAllDataNavPage = () => {
  return new Promise((resolve, reject) => {
    resolve(data.dataNavPage);
  });
};

export const getDataById = () => {
  return new Promise((resolve, reject) => {
    resolve(data.products);
  });
};

export const getDetailDataProduct = () => {
  return new Promise((resolve, reject) => {
    resolve(data.optionTypeProDuct);
  });
};
