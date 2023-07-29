// 앱에는 단 하나의 스토어가 존재함.
// 모든 redux로 담은 데이터가 한 곳에 담기는 장소.

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import productReducer from "./slices/productSlice";

const store = configureStore({
  reducer: {
    // User reducer: email
    user: userReducer,
    product: productReducer,
  },
});

export default store;

// 우리가 redux reducer을 쓸 때는, 상태 변경 용도로만 쓰는 것임.
// 즉, 복잡한 로직이 들어가서는 안됨. (본래의 취지와 다른 것임.)
// 만약, 비동기처리, API처리와 같은 side effect가 생긴다면, middleware을 사용해야함.
