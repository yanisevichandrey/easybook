import React from "react";
import ReactDOM from "react-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../src/Login/model";
import App from "./App";
import logger from 'redux-logger'

// generate Redux store
const store = init({
  models,
  redux: {
      middlewares: [logger]
  }
});

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.querySelector("#root"));
