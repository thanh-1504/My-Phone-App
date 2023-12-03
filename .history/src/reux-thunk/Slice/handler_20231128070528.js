import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fecthDataProvince,
  getAllDataNavPage,
  getDataById,
  getDataBySlug,
  getDataFilterPage,
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

export const handlerFetchDistrict = createAsyncThunk('fetchDistrict', async (idProvince,thunkAPI) => {
  const response = await fetchd
})
