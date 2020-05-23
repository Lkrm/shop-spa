import { createActions } from 'redux-actions';
import { CLOSE_MODAL, OPEN_MODAL } from './types';


export const {
  openModal,
  closeModal,
} = createActions({

},
OPEN_MODAL,
CLOSE_MODAL);
