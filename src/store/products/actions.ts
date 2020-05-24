import { schema } from 'normalizr';
import { createActionsTS } from '../../utils/types/store';
import types from './types';
import { ApiMethods } from '../../utils/enums/store';

export const {
  getProductsRequest,
  openModal,
  closeModal,
  setProducts,
} = createActionsTS({
  [types.GET_PRODUCTS_REQUEST]: () => ({
    route: '/products',
    method: ApiMethods.GET,
    selector: 'getProductsRequest',
    actions: {
      success: setProducts,
    },
    normalize: {
      pathToData: ['data'],
      schema: [new schema.Entity('products')],
    },
  }),
},
types.OPEN_MODAL,
types.CLOSE_MODAL,
types.SET_PRODUCTS);
