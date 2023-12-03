import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data/data";
const globalSlice = createSlice({
  name: "global",
  initialState: { dataMainPage: [data] },
  reducers: {
    getProduct: () => {
      const { slug } = useParams();
      const { dataIp } = useSelector((state) => state.iPhone);
      switch (slug) {
        case "iPhone": {
          return (
            <ProductsItem
              data={dataIp?.dataMainPage[0]?.sectionIphone}
            ></ProductsItem>
          );
        }
        default:
          break;
      }
    }
  },
  //   extraReducers: (builder) => {
  //     builder.addCase(handleGetData.fulfilled, (state, action) => {
  //       state.data = action.payload;
  //     });
  //   },
});
export const {} = globalSlice.actions;
export default globalSlice.reducer;
