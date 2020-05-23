import { handleActions } from 'redux-actions';
import { always, objOf, compose } from 'ramda';

import * as types from './types';
import { mergeIn } from '../../utils/helpers/state/common';

export default handleActions({
  [types.OPEN_CART]: mergeIn(compose(objOf('isOpen'), always(true))),
  [types.CLOSE_CART]: mergeIn(compose(objOf('isOpen'), always(false))),
}, {
  isOpen: false,
});
