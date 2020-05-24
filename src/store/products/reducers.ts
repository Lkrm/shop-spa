import { handleActions } from 'redux-actions';
import { compose, prop } from 'ramda';

import types from './types';
import { mergeIn } from '../../utils/helpers/state/common';

export default handleActions({
  [types.SET_PRODUCTS]: mergeIn(compose(prop('payload'))),
}, {
});
