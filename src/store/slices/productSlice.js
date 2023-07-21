import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  loading: false, // 요청을 보냈을 때는 true, 아닌 경우 : 요청이 없었거나, 실패했거나, 성공했을 때, false
  // error: null, // 에러가 있는 경우에 error.message 값을 담는다.
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // reducer는 상태를 변경하는 역할을 한다.
    getProducts: state => {
      state.loading = true;
    },
    getProductSuccess: (state, action) => {
      state.products = action.payload.products;
      state.loading = false;
    },
    getProductsFailed: state => {
      state.loading = false;
    },
  },
});

export const { getProducts, getProductSuccess, getProductsFailed } =
  productSlice.actions;

export default productSlice.reducer;
