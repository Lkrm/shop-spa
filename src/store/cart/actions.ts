import { createActions } from 'redux-actions';
import types from './types';


export const {
  openCart,
  closeCart,
  addProductToCart,
  deleteProductFromCart,
} = createActions({},
  types.OPEN_CART,
  types.CLOSE_CART,
  types.ADD_PRODUCT_TO_CART,
  types.DELETE_PRODUCT_FROM_CART);
