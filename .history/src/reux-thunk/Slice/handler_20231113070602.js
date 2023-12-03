import { createAsyncThunk } from "@reduxjs/toolkit";
import { addData, requestData } from "./request";
export const handleGetData = createAsyncThunk(
  "getData",
  async (query, thunkAPI) => {
    const data = await requestData();
    return data.products;
  }
);
