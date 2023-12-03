import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllDataNavPage,
  getDataById,
  getDataBySlug,
  getDetailDataProduct,
  getProductDataByName,
  requestData,
  showBrandName,
} from "./request";
export const handleGetData = createAsyncThunk(
  "getData",
  async (query, thunkAPI) => {
    const data = await requestData();
    return data;
  }
);

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
  async (modelProduct, thunkAPI) => {
    const response = await getDetailDataProduct(modelProduct);
    const data = await response.filter((item) => item.series === modelProduct);
    return data;
  }
);

export const handleShowBrandName = createAsyncThunk(
  "showBrandName",
  async (typeProduct, thunkAPI) => {
    const response = await showBrandName();
    // const data = await response.filter((item) => item.slugFilter === typeProduct);
   const nameBrand = data[0].name;
    // const brandFilter = data[0].filterBrandName.filter(
    //   (item) => item.brand === typeProduct
    // );
    return response;
  }
);
