import { handleActions } from 'redux-actions';
import * as types from './types';

const mergeByProp: Function = (property: string, fn: Function) : Function => (state: any, action: any): any => ({ [property]: { ...state[property], ...fn(action, state) } });

export default handleActions({
  [types.OPEN_MODAL]: mergeByProp('modals', ({ payload: modalName }: any) => ({ [modalName]: true })),
}, {
  modals: { },
});
