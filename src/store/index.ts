import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import ui from './ui';
import cart from './cart';

const store = createStore(
  combineReducers({
    ui,
    cart,
  }),
  composeWithDevTools({
  })(),
);


export default store;
