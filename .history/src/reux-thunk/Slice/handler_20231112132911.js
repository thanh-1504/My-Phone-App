import { createAsyncThunk } from "@reduxjs/toolkit";
import { queries } from "@testing-library/react";

export const handleGetData = createAsyncThunk('getData',(queries,thunkAPI) )