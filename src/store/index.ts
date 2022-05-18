// import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import testReducers from "./reducers/test.reducers";

import { connectRouter, routerMiddleware } from 'connected-react-router'
import { history } from './history'


const store = configureStore({
  reducer: {
    test: testReducers,
    router: connectRouter(history),
  },
  middleware: [routerMiddleware(history)]
})

export default store;
