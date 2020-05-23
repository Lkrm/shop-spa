import { createActions } from 'redux-actions';
import { CLOSE_CART, OPEN_CART } from './types';


export const {
  openCart,
  closeCart,
} = createActions({

},
OPEN_CART,
CLOSE_CART);
