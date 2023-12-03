import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductDataByName, requestData } from "./request";
export const handleGetData = createAsyncThunk(
  "getData",
  async (query, thunkAPI) => {
    const data = await requestData();
    return data;
  }
);

export const handleGetDataBySlug = createAsyncThunk(
  'getData'
)
