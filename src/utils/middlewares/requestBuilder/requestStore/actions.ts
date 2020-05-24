import { createActions } from 'redux-actions';

import types from './types';


export const {
  requestSend,
  requestError,
  requestSuccess,
  setRequestPending,
} = createActions({},
  types.REQUEST_SEND,
  types.REQUEST_ERROR,
  types.REQUEST_SUCCESS,
  types.SET_REQUEST_PENDING);
