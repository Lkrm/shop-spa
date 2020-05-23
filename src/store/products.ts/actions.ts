import { createActions } from 'redux-actions';
import types from './types';

const mapActions = {
  [types.GET_PRODUCTS_REQUEST]: () => ({}),
};

export const {
  openModal,
  closeModal,
  getProductsRequest,
} = createActions(mapActions,
  types.OPEN_MODAL,
  types.CLOSE_MODAL);
