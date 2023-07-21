import { takeLatest, call, put, all, fork } from 'redux-saga/effects';
import { fetchProducts } from '../../services/api';
import {
  getProducts,
  getProductSuccess,
  getProductsFailed,
} from '../slices/productSlice';

function* getProductBySaga() {
  try {
    const res = yield call(fetchProducts); // axios get promise 비동기 요청 : 10초, 100초가 걸릴 수 있음.
    yield put(getProductSuccess(res.data));
  } catch (e) {
    yield put(getProductsFailed(e));
  }
}

function* watchGetProducts() {
  // 여러번 요청을 보냈을 때, 응답을 받지 않은 상태인데 재요청이 온다면 바로 중단시킴
  yield takeLatest(getProducts, getProductBySaga);
}

export default function* getProductSaga() {
  yield all([fork(watchGetProducts)]);
}
