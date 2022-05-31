import {
  call,
  all,
  fork,
  take,
  takeEvery,
  throttle,
  delay,
} from "redux-saga/effects";

import postSaga from "./post";
import userSaga from "./user";

export default function* rootSaga() {
  yield all([fork(userSaga), fork(postSaga)]);
}
