import { curry, has } from 'ramda';

export const invokerIfHas = curry((method: string, data: any, object: any) => {
  if (has(method, object)) {
    return object[method](data);
  }
  return false;
});


export const invokerAndCallWrapIfHas = curry((method: string, data: any, object: any,
  wrapFunction: Function) => {
  const result = invokerIfHas(method, data, object);
  if (result) wrapFunction(result);
});
