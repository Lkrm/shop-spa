import { handleActions } from 'redux-actions';
import { compose, prop } from 'ramda';

import { mergeIn } from '../../../helpers/state/common';
import types from './types';

export default handleActions({
  [types.SET_REQUEST_PENDING]: mergeIn(compose(prop('payload'))),
}, {});
