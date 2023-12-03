import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllDataNavPage,
  getDataById,
  getDataBySlug,
  getDetailDataProduct,
  getProductDataByName,
  requestData,
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
    const data = await getDataById(id);
    return data;
  }
);

export const handleGetDetailDataProduct = createAsyncThunk(
  "getDetailData",
  async (modelProduct, thunkAPI) => {
    const data = await getDetailDataProduct(modelProduct);
    // const data =response.filter(item => item. === )
    const response = await getDetailDataProduct(modelProduct);
    const data1 = await response.filter(
      (item) => item.series === "Iphone15ProMax"
    );
    return data[0].series;
  }
);
