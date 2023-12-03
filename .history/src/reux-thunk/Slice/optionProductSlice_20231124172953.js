import { createSlice } from "@reduxjs/toolkit";

const optionProductSlice = createSlice({
  name: "option",
  initialState: { dataOption: [] },
  reducers: {},
  extraReducers: builder => {
    builder.addCase()
  }
});

export default optionProductSlice.reducer;
