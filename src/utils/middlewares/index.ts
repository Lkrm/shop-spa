import createSagaMiddleware from 'redux-saga';
import { requestBuilder } from './requestBuilder';

const sagaMiddleware = createSagaMiddleware();

export default [
  requestBuilder,
  sagaMiddleware,
];
