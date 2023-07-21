import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login } from '../../services/api';

const initialState = {
  email: null,
  loading: false, // 요청을 보냈을 때는 true, 아닌 경우 : 요청이 없었거나, 실패했거나, 성공했을 때, false
  // error: null, // 에러가 있는 경우에 error.message 값을 담는다.
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // reducer는 상태를 변경하는 역할을 한다.
    setEmail: (state, action) => {
      state.email = action.payload.email;
    },
  },
  extraReducers: builder => {
    builder.addCase(loginRequest.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loginRequest.fulfilled, (state, action) => {
      state.loading = false;
      state.email = action.payload.email;
      localStorage.setItem('token', action.payload.token);
      state.token = action.payload.token;
    });
    builder.addCase(loginRequest.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const loginRequest = createAsyncThunk(
  'user/loginRequest', // 첫 번째 파라미터, unique한 key를 받는다.
  async data => {
    // 두 번째 파라미터, 비동기 async callback 함수
    const { email, password } = data;
    const response = await login({ email, password });
    return {
      email,
      token: response.headers.authorization,
    };
  }
);

export const { setEmail } = userSlice.actions;

export default userSlice.reducer;
