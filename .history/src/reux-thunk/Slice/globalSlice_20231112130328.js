import { createSlice } from "@reduxjs/toolkit";
export const globalSlice = createSlice({
  name: "global",
  initialState: [{ data: 0 }],
  reducers: {
    addDataToFireBase: (state, action) => {
        state[0].data
    },
  },
});
