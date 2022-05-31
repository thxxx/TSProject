import {
  call,
  all,
  fork,
  take,
  takeEvery,
  throttle,
  delay,
} from "redux-saga/effects";

function addPostAPI() {
  // return axios.post('/api/login')
}

function* addPost() {
  try {
    const result = yield call(addPostAPI);
    yield put({
      type: "ADD_POST_SUCCESS",
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: "ADD_POST_FAILURE",
      data: err.response.data,
    });
  }
}

function* watchAddPost() {
  yield takeEvery("ADD_POST_REQUEST", addPost);
}

export default function* postSaga() {
  yield all([fork(watchAddPost)]);
}
