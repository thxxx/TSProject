import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import reducer from "../reducers";
import { applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import rootSaga from "../sagas/index";
// import thunkMiddleware from "redux-thunk";

const loggerMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  // 액션을 실행하기 전에 콘솔로그를 한번 찍어주는 간단한 미들웨어.
  console.log(action, "미들웨어");

  return next(action);
};

const configureStores = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, loggerMiddleware]; // 여기다 saga나 thunk를 넣는다.
  // 그럼 싸가랑 떵크가 뭐지??

  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));

  const store = configureStore({
    reducer,
    middleware: [...middlewares],
    enhancer,
  });

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

const wrapper = createWrapper(configureStores, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
