import { createSelector } from 'reselect';
import { pathOr, identity } from 'ramda';

export const getOpenStatus = createSelector(identity, pathOr(false, ['cart', 'isOpen']));
