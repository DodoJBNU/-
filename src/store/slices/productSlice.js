import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../../services/product";
import _ from "lodash";

const initialState = {
  products: [],
  loading: false, // 요청을 보냈을 때는 true, 아닌 경우 : 요청이 없었거나, 실패했거나, 성공했을 때, false
  error: null, //  error exist : {message, status}
  isEnd: false,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      if (action.payload.response.length < 10) {
        state.isEnd = true;
      }
      state.loading = false;
      state.products = _.uniqBy([...state.products, ...action.payload.response], "id");
      state.error = action.payload.error;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    });
  },
});

export const getProducts = createAsyncThunk("products/getProducts", async (page) => {
  const response = await fetchProducts(page);
  return response.data;
});

export default productSlice.reducer;
