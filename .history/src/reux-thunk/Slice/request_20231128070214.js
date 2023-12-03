import { data } from "../../data/data";
import axios from "axios";
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

export const getDataFilterPage = () => {
  return new Promise((resolve, reject) => {
    resolve(data.dataNavPage[0].filterBrandName);
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

export const fecthDataProvince = () => {
  return axios
    .get("https://vapi.vnappmob.com/api/province/")
    .then((response) => response.data.results);
};

export const fetchDataDistrict = (idPro) => {
  return axios.get('https://vapi.vnappmob.com/api/province/')
}