import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { requestStore } from '../utils/middlewares/requestBuilder';
import middlewares from '../utils/middlewares';

import ui from './ui';
import cart from './cart';
import products from './products';

const store = createStore(
  combineReducers({
    ui,
    cart,
    products,
    requestStore,
  }),
  composeWithDevTools({
  })(applyMiddleware(...middlewares)),
);


export default store;
