import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import reducer from "../reducers";
import { applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const configureStores = () => {
  const middlewares = []; // 여기다 saga나 thunk를 넣는다.
  // 그럼 싸가랑 떵크가 뭐지??

  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));

  const store = configureStore({ reducer, enhancer });

  return store;
};

const wrapper = createWrapper(configureStores, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
