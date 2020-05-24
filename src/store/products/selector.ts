import { createSelector } from 'reselect';
import { pathOr, identity } from 'ramda';

export const getProductsResult = createSelector(identity, pathOr([], ['products', 'result']));
export const getProductsEntities: any = createSelector(identity, pathOr({}, ['products', 'entities', 'products']));
export const getProductById = createSelector(
  getProductsEntities,
  (e, s) => console.log(e, s),
);
