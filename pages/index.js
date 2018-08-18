import React from 'react';

import Home from "./Home";

import { Provider } from 'react-redux';
import { createStore } from 'redux';
const store = createStore((x) => { return x; });

export default () => (
  <div id="apple-picker-container">
    <Provider store={store}>
      <Home />
    </Provider>
  </div>
)
