import { createSlice } from "@reduxjs/toolkit";
const iPadSlice = createSlice({
  name: "watch",
  initialState: { dataWatch: [] },
  reducers: {
    handleGetDataIpad: (state, action) => {
      state.dataWatch = action.payload;
    },
},
});
export const { handleGetDataIpad } = iPadSlice.actions;
export default iPadSlice.reducer;
