import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";

import ReduxPromise from "redux-promise";
import ReduxThunk from "redux-thunk";

import createSagaMiddleware from "redux-saga";
import { watcherSagas } from "./sagas/weatherSaga";

import Log from "./middlewares/Log";

import * as serviceWorker from "./serviceWorker";

//using Reduxpromise to return a promise instead of object type
//const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

//using thunk middleware
//const createStoreWithMiddleware = applyMiddleware(Log,ReduxThunk)(createStore);

//using redux-saga

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(Log, sagaMiddleware));

sagaMiddleware.run(watcherSagas);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
