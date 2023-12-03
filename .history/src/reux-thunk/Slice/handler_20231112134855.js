import { createAsyncThunk } from "@reduxjs/toolkit";
import { addData } from "./request";
export const handleGetData = createAsyncThunk(
  "getData",
  async (query, thunkAPI) => {
    const data = await addData();
    clg
  }
);
