import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { BrowserRouter as Router } from "react-router-dom";

// const store = createStore(
//   null,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   composeWithDevTools(applyMiddleware(thunk))
// );

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
