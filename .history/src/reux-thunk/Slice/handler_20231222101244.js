import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fecthDataProvince,
  fetchDataDistrict,
  fetchDataWard,
  getAllDataNavPage,
  getData,
  getDataById,
  getDataBySlug,
  getDataFilterPage,
  getDetailDataProduct,
  getOtherProducts,
} from "./request";

export const handleGetData = createAsyncThunk("getData", async (type) => {
  const response = await getData();
  console.log(type);
  let data = [];
  if (type && type === "mainPage")
    data = response.filter((item) => item.mainPage);
  console.log(data);
  return data;
});

export const handleGetDataBySlug = createAsyncThunk(
  "getDataBySlug",
  async (query, thunkAPI) => {
    const data = await getDataBySlug(query);
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
  async (id, thunkAPI) => {
    const response = await getDataById(id);
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
  async ({ typeProduct, slug }, thunkAPI) => {
    const response = await getDataFilterPage();
    const nameBrand = response.filter((item) => item.slugFilter === slug);
    const brandFilter = response.filter((item) => item.brand === typeProduct);
    const dataFilter = brandFilter.filter((item) => item.slugFilter === slug);
    const data = dataFilter[0].dataBrand;
    return { nameBrand, brandFilter, data };
  }
);

export const handleFetchProvince = createAsyncThunk(
  "fetchProvince",
  async (query, thunkAPI) => {
    const response = await fecthDataProvince();
    return response;
  }
);

export const handlerFetchDistrict = createAsyncThunk(
  "fetchDistrict",
  async (idProvince, thunkAPI) => {
    const data = await fetchDataDistrict(idProvince);
    return data;
  }
);

export const handleFetchWard = createAsyncThunk(
  "fetchWard",
  async (idDistrict, thunkAPI) => {
    const data = await fetchDataWard(idDistrict);
    return data;
  }
);

export const handleFetchOtherProducts = createAsyncThunk(
  "getOtherProducts",
  async (typeProduct) => {
    const response = await getOtherProducts(typeProduct);
    const data = response.filter((item) => item.slug === typeProduct);
    return data;
  }
);
