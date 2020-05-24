import { handleActions } from 'redux-actions';
import {
  always, objOf, compose, concat, uniq, of, reject, equals,
} from 'ramda';

import types from './types';
import { mergeIn } from '../../utils/helpers/state/common';

export default handleActions({
  [types.OPEN_CART]: mergeIn(compose(objOf('isOpen'), always(true))),
  [types.CLOSE_CART]: mergeIn(compose(objOf('isOpen'), always(false))),
  [types.ADD_PRODUCT_TO_CART]: mergeIn(({ payload: productId }: { [prop: string]: number },
    { products }
    : { [prop: string]: Array<number> }) => ({ products: uniq(concat(products, of(productId))) })),
  [types.DELETE_PRODUCT_FROM_CART]: mergeIn(({ payload: productId }: { [prop: string]: number },
    { products }
    : { [prop: string]: Array<number> }) => ({ products: reject(equals(productId), products) })),
}, {
  isOpen: false,
  products: [],
});
