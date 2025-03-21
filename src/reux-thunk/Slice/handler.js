import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fecthDataProvince,
  fetchDataDistrict,
  fetchDataWard,
  getAllDataNavPage,
  getData,
  getDataById,
  getDataFilterPage,
  getDetailDataProduct,
} from "./request";

export const handleGetData = createAsyncThunk(
  "getData",
  async ({ type, page }) => {
    const response = await getData();
    let data = [];
    if (!type && page === "mainPage")
      data = await response.filter((item) => item.mainPage);
    else if (type === "iPhone" && page === "iPhone")
      data = await response.filter((item) => item.onProductPageIp);
    else if (type === "iPad" && page === "iPad")
      data = await response.filter((item) => item.onProductPageIpad);
    else if (type === "Mac" && page === "Mac")
      data = await response.filter((item) => item.onProductPageMac);
    else if (type === "AirPods" && page === "AirPods")
      data = await response.filter((item) => item.onProductPageAirPods);
    else if (type === "Watch" && page === "Watch")
      data = await response.filter((item) => item.onProductPageWatchs);
    return data;
  }
);

export const handleGetAllDataNav = createAsyncThunk(
  "getDataAllNav",
  async (query, thunkAPI) => {
    const data = await getAllDataNavPage(query);
    return data;
  }
);

export const handleGetDataById = createAsyncThunk(
  "getDataById",
  async (id) => {
    const response = await getDataById();
    const data = response.filter((item) => item.id.toString() === id);
    return data;
  }
);

export const handleGetDetailDataProduct = createAsyncThunk(
  "getDetailData",
  async (modelProduct) => {
    const response = await getDetailDataProduct(modelProduct);
    const data = await response.filter((item) => item.series === modelProduct);
    return data;
  }
);

export const handleFilterPage = createAsyncThunk(
  "showBrandName",
  async ({ typeProduct, slug }) => {
    const response = await getDataFilterPage();
    const dataAll = await getData();
    const nameBrand = response.filter((item) => item.slugFilter === slug);
    const brandFilter = response.filter((item) => item.brand === typeProduct);
    const data = dataAll.filter((item) => item.pathFilter === slug);
    return { nameBrand, brandFilter, data };
  }
);

export const handleFetchProvince = createAsyncThunk(
  "fetchProvince",
  async () => {
    const response = await fecthDataProvince();
    return response;
  }
);

export const handlerFetchDistrict = createAsyncThunk(
  "fetchDistrict",
  async (idProvince) => {
    const data = await fetchDataDistrict(idProvince);
    return data;
  }
);

export const handleFetchWard = createAsyncThunk(
  "fetchWard",
  async (idDistrict) => {
    const data = await fetchDataWard(idDistrict);
    return data;
  }
);

export const handleFetchOtherProducts = createAsyncThunk(
  "getOtherProducts",
  async (typeProduct) => {
    const response = await getData();
    const data = response.filter((item) => item.typeProduct === typeProduct);
    return data;
  }
);
