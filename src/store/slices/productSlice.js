import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../../services/product";

const initialState = {
  products: [],
  loading: false, // 요청을 보냈을 때는 true, 아닌 경우 : 요청이 없었거나, 실패했거나, 성공했을 때, false
  error: null, //  error exist : {message, status}
};

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload.response; // action.payload : {success, response, error }
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
