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
  console.log("치크치크는디나?333");
  yield all([fork(userSaga), fork(postSaga)]);
}
