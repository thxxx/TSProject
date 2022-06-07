import { all, fork, put, takeLatest, delay } from "redux-saga/effects";

import {
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_FAILURE,
} from "../reducers/post";

function addPostAPI(data) {
  return axios.post("/api/post", data);
}

function* addPost(action) {
  console.log("애드 시도");
  try {
    // const result = yield call(addPostAPI);
    yield delay(1000);
    yield put({
      type: ADD_POST_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: ADD_POST_FAILURE,
      data: err.response.data,
    });
  }
}
function addCommentAPI(data) {
  return axios.post("/api/post", data);
}

function* addComment(action) {
  try {
    // const result = yield call(addPostAPI);
    yield delay(1000);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchAddPost() {
  console.log("아까ㅣ지?");
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga() {
  yield all([fork(watchAddPost), fork(watchAddComment)]);
}
