import {
  hasPath, pathOr, prop, propOr,
} from 'ramda';
import { normalize, Schema } from 'normalizr';
import axios from 'axios';
import { RequestActionSignature } from '../../types/store';
import { ApiMethods } from '../../enums/store';
import { invokerIfHas, invokerAndCallWrapIfHas } from '../../helpers/common';
import { requestActions } from './requestStore';

const isRequestAction = hasPath(['payload', 'route']);
// I am suggest that if payload of action has property 'rout',
// this action must be processed as request action

interface normalizeOptionSignature {
  pathToData?: Array<string | number>,
  schema?: Schema<any>,
}

const normalizeResponse = (data: any, options: normalizeOptionSignature) => {
  const { schema, pathToData } = options;
  if (pathToData) return normalize(pathOr({}, pathToData, data), schema);
  return data;
};
const normalizeError = (error: any) => error;

const callRequest = async (payload, dispatch, next) => {
  const route = prop('route', payload);
  const method: ApiMethods = prop('method', payload);
  const selector: string = prop('selector', payload);
  const params: any = prop('params', payload);
  const normalizeOption: normalizeOptionSignature = prop('normalize', payload);
  // const meta: any = prop('meta', payload);
  const callbacks: (data: any) => void = propOr(null, 'callbacks', payload);
  const actions: (data: any) => void = propOr(null, 'actions', payload);

  next(requestActions.requestSend(payload));
  next(requestActions.setRequestPending({ [selector]: true }));

  try {
    const result = await axios({
      method,
      url: `http://localhost:8888${route}`,
      data: params,
    });
    const data = normalizeResponse(result, normalizeOption);

    next(requestActions.requestSuccess(payload));
    invokerIfHas('success', data, callbacks);
    invokerAndCallWrapIfHas('success', data, actions, dispatch);
  } catch (result) {
    const error = normalizeError(result);

    next(requestActions.requestError(payload));
    invokerIfHas('error', error, callbacks);
    invokerAndCallWrapIfHas('error', error, actions, dispatch);
  } finally {
    next(requestActions.setRequestPending({ [selector]: false }));
    invokerIfHas('finally', null, callbacks);
    invokerAndCallWrapIfHas('finally', null, actions, dispatch);
  }
};

const requestBuilder = ({ dispatch }) => (next) => (action) => {
  if (isRequestAction(action)) {
    const payload: RequestActionSignature = prop('payload', action);
    callRequest(payload, dispatch, next);
  }
  next(action);
};

export default requestBuilder;
