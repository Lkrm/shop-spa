import { createSelector } from 'reselect';
import { pathOr, identity } from 'ramda';

export const getProductsResult = createSelector(identity, pathOr([], ['products', 'result']));
export const getProductsEntities = createSelector(identity, pathOr({}, ['products', 'entities', 'products']));
