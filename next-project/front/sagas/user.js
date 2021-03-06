import { all, fork, takeEvery, put, delay } from "redux-saga/effects";

import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from "../reducers/user";

function logInAPI(data) {
  return axios.post("/api/login", data);
}

function* logIn(action) {
  // 여기에 자동으로 매개변수로 action이 전달된다.
  console.log("사가 start");
  try {
    // const result = yield call(logInAPI, action.data);
    yield delay(1000);
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      data: action.data,
    });
  }
}
function logOutAPI(data) {
  return axios.post("/api/login", data);
}

function* logOut(action) {
  console.log("사가 start");
  // 여기에 자동으로 매개변수로 action이 전달된다.
  try {
    // const result = yield call(logInAPI, action.data);
    yield delay(1000);
    yield put({
      type: LOG_OUT_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      data: action.data,
    });
  }
}

function signUpAPI(data) {
  return axios.post("/api/signup", data);
}

function* signUp(action) {
  // 여기에 자동으로 매개변수로 action이 전달된다.
  try {
    // const result = yield call(logInAPI, action.data);
    yield delay(1000);
    yield put({
      type: SIGN_UP_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: SIGN_UP_FAILURE,
      data: action.data,
    });
  }
}

function* watchLogIn() {
  yield takeEvery(LOG_IN_REQUEST, logIn); // LOG_IN_REQUEST 이라는 액션이 실행될 때 까지 기다렸다가 logIn을 실행하겠다.
} // 이벤트리스너 처럼 LOG_IN이 들어오면 뒤의 함수를 실행하도록.

function* watchLogOut() {
  yield takeEvery(LOG_OUT_REQUEST, logOut); // LOG_IN_REQUEST 이라는 액션이 실행될 때 까지 기다렸다가 logIn을 실행하겠다.
} // 이벤트리스너 처럼 LOG_IN이 들어오면 뒤의 함수를 실행하도록.

function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut), fork(watchSignUp)]);
}
